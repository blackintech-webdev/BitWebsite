from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from app.schemas.board_member import BoardMemberCreate, BoardMemberUpdate, BoardMemberOut
from app.dependencies import require_auth, security
from app.config import supabase, supabase_admin
from typing import List

router = APIRouter(prefix="/board-members", tags=["Board Members"])


# GET all — public
@router.get("/", response_model=List[BoardMemberOut])
def get_board_members():
    res = supabase.table("board_members").select("*").order("display_order").execute()
    return res.data


# GET one — public
@router.get("/{member_id}", response_model=BoardMemberOut)
def get_board_member(member_id: str):
    res = supabase.table("board_members").select("*").eq("id", member_id).single().execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Member not found")
    return res.data


# POST — auth protected
@router.post("/", response_model=BoardMemberOut, status_code=201)
def create_board_member(
    member: BoardMemberCreate,
    user=Depends(require_auth)
):
    res = supabase_admin.table("board_members").insert(member.model_dump()).execute()
    return res.data[0]


# PATCH — auth protected
@router.patch("/{member_id}", response_model=BoardMemberOut)
def update_board_member(
    member_id: str,
    member: BoardMemberUpdate,
    user=Depends(require_auth)
):
    updates = {k: v for k, v in member.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    res = supabase_admin.table("board_members").update(updates).eq("id", member_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Member not found")
    return res.data[0]


# DELETE — auth protected
@router.delete("/{member_id}", status_code=204)
def delete_board_member(
    member_id: str,
    user=Depends(require_auth)
):
    res = supabase_admin.table("board_members").delete().eq("id", member_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Member not found")
