from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from app.schemas.sponsor import SponsorCreate, SponsorUpdate, SponsorOut
from app.dependencies import require_auth, security
from app.config import supabase, supabase_admin
from typing import List
# # Group all sponsors routes/endpoints together
router = APIRouter(prefix="/sponsors", tags=["Sponsors"])

# Get All Sponsors - PUBLIC request(no auth needed)

@router.get("/get-all-sponsors", response_model = List[SponsorOut])
def get_all_sponsors():
    # Fetch all data from the supabase sponsors table
    get_all_sponsors_api_response = supabase.table("sponsors").select("*").execute()
    return get_all_sponsors_api_response.data


# Get A Specific Sponsor - PUBLIC request(no auth needed)
@router.get("/get-sponsor/{sponsor_id}", response_model = SponsorOut)
def get_a_sponsor(sponsor_id: str):
    # Fetch one particular row from the supabase sponsors table
    try:
        get_sponsor_api_response = supabase.table("sponsors").select("*").eq("id", sponsor_id).single().execute()
        return get_sponsor_api_response.data
    # Raises a 404 error to prevent a generic 500 Internal Server Error
    except Exception:
        raise HTTPException(status_code=404, detail="The sponsor you specified couldn't be found!")

# Create A New Sponsor - PROTECTED request(auth needed)
@router.post("/create-sponsor", response_model = SponsorOut, status_code = 201)
def create_new_sponsor(new_sponsor: SponsorCreate, user = Depends(require_auth)):
    # Insert sponsor data into new row in Supabase table
    create_sponsor_api_response = supabase_admin.table("sponsors").insert(new_sponsor.model_dump()).execute()
    # Return the new row data
    return create_sponsor_api_response.data[0]


