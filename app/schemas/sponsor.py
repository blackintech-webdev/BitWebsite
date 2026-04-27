from pydantic import BaseModel, HttpUrl
from typing import Optional
import uuid


class SponsorCreate(BaseModel):
    name: str
    logo_url: HttpUrl
    link: HttpUrl
    tier: Optional[str] = None


class SponsorUpdate(BaseModel):
    name: Optional[str] = None
    logo_url: Optional[HttpUrl] = None
    link: Optional[HttpUrl] = None
    tier: Optional[str] = None



class SponsorOut(SponsorCreate):
    id: uuid.UUID
