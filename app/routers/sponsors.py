from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from app.schemas.sponsor import SponsorCreate, SponsorUpdate, SponsorOut
from app.dependencies import require_auth, security
from app.config import supabase, supabase_admin
from typing import List

# # Group all sponsors routes/endpoints together
router = APIRouter(prefix="/sponsors", tags=["Sponsors"])

# Get All - PUBLIC

@router.get("/get-all-sponsors", response_model = List[SponsorOut])
def get_all_sponsors():
    # Fetch all data from the supabase sponsors table
    api_response = supabase.table("sponsors").select("*").execute()
    return api_response.data



