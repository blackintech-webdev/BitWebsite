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
    valid_sponsor_tiers = ["Gold", "Silver", "Bronze"]
    new_sponsor.name = new_sponsor.name.strip()
    # Verify that the sponsor name has actually been provided
    if new_sponsor.name == "":
        raise HTTPException(status_code = 400, detail = "Sponsor name cannot be empty.")
    
    # Verify that the sponsor isn't a duplicate entry in the database
    existing_sponsor_response =  (supabase.table("sponsors").select("id").ilike("name", new_sponsor.name).execute())

    # Checks to see if the duplicate sponsor name check returned data(invalid case)
    if existing_sponsor_response.data:
        raise HTTPException(status_code = 409, detail = "A sponsor with this name already exists.")
    # Verfiy that if the user has provided a tier, it's a valid one
    if new_sponsor.tier is not None:
        new_sponsor.tier = new_sponsor.tier.strip().capitalize()
        if new_sponsor.tier not in valid_sponsor_tiers:
            raise HTTPException(status_code = 400, detail = "Sponsor tier must be Gold, Silver, or Bronze.")
    # Insert sponsor data into a new row in the Supabase table
    create_sponsor_api_response = supabase_admin.table("sponsors").insert(new_sponsor.model_dump(mode="json")).execute()
    # Return the new row data
    return create_sponsor_api_response.data[0]

# Update An Existing Sponsor - PROTECTED request(auth needed)
@router.patch("/update-sponsor/{sponsor_id}", response_model = SponsorOut)
def update_existing_sponsor(sponsor_id: str, sponsor: SponsorUpdate, user = Depends(require_auth)):

    valid_sponsor_tiers = ["Gold", "Silver", "Bronze"]

    # Make a dictionary consisting of the schema fields and associated values the user indicated they want to update
    updates = {field: value for field, value in sponsor.model_dump(mode="json").items() if value is not None}
    if not updates:
        raise HTTPException(status_code = 400, detail = "There are no fields to update.")
    
    if "name" in updates:
        updates["name"] = updates["name"].strip()
        if updates["name"] == "":
            raise HTTPException(status_code = 400, detail = "Sponsor name cannot be empty.")
        
        # Check to see if the sponsor name already exists in the database
        existing_sponsor_response = (supabase.table("sponsors").select("id").ilike("name", updates["name"]).execute())
        if existing_sponsor_response.data:

            existing_sponsor_id = str(existing_sponsor_response.data[0]["id"])
            # ONLY check for duplicate sponsors amongst OTHER rows in the table
            if existing_sponsor_id != sponsor_id:
                raise HTTPException(status_code = 409, detail = "A sponsor with this name already exists.")
    
    if "tier" in updates:
        updates["tier"] = updates["tier"].strip().capitalize()
        if updates["tier"] not in valid_sponsor_tiers:
            raise HTTPException(status_code = 400, detail = "Sponsor tier must be Gold, Silver, or Bronze.")
        
    # Update the specified sponsor row in the table with the changes that have been made
    response = supabase_admin.table("sponsors").update(updates).eq("id", sponsor_id).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Invalid sponsor id.")
    return response.data[0]





