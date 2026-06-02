from fastapi import APIRouter, HTTPException, Depends
from app.schemas.event import EventCreate, EventUpdate, EventOut
from app.dependencies import require_auth, security
from app.config import supabase, supabase_admin
from typing import List

router = APIRouter(prefix="/events", tags=["Events"])

# GET all — public
@router.get("/", response_model=List[EventOut])
def get_events():
    res = supabase_admin.table("events").select("*").execute()
    return res.data


# GET one — public
@router.get("/{event_id}", response_model=EventOut)
def get_event(event_id: str):
    res = supabase_admin.table("events").select("*").eq("id", event_id).single().execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Event not found")
    return res.data


# POST — auth protected
@router.post("/", response_model=EventOut, status_code=201)
def create_event(
    event: EventCreate,
    user=Depends(require_auth)
):
    res = supabase_admin.table("events").insert(event.model_dump(mode='json')).execute()
    return res.data[0]


# PATCH — auth protected
@router.patch("/{event_id}", response_model=EventOut)
def update_event(
    event_id: str,
    event: EventUpdate,
    user=Depends(require_auth)
):
    updates = {k: v for k, v in event.model_dump(mode='json').items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    res = supabase_admin.table("events").update(updates).eq("id", event_id).execute()
    
    if not res.data:
        raise HTTPException(status_code=404, detail="Event not found")
    return res.data[0]


# DELETE — auth protected
@router.delete("/{event_id}", status_code=204)
def delete_event(
    event_id: str,
    user=Depends(require_auth)
):
    res = supabase_admin.table("events").delete().eq("id", event_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Event not found")