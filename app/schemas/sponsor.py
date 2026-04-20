from pydantic import BaseModel
from typing import Optional
import uuid


class SponsorCreate(BaseModel):
    name: str
    logo_url: Optional[str] = None
    link: Optional[str] = None
    tier: Optional[str] = None


class SponsorUpdate(BaseModel):
    name: Optional[str] = None
    logo_url: Optional[str] = None
    link: Optional[str] = None
    tier: Optional[str] = None



class SponsorOut(SponsorCreate):
    id: uuid.UUID
