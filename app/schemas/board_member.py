from pydantic import BaseModel
from typing import Optional
import uuid


class BoardMemberCreate(BaseModel):
    name: str
    position: Optional[str] = None
    blurb: Optional[str] = None
    is_past: bool = False
    linkedin_url: Optional[str] = None
    photo_url: Optional[str] = None


class BoardMemberUpdate(BaseModel):
    name: Optional[str] = None
    position: Optional[str] = None
    blurb: Optional[str] = None
    is_past: Optional[bool] = None
    linkedin_url: Optional[str] = None
    photo_url: Optional[str] = None


class BoardMemberOut(BoardMemberCreate):
    id: uuid.UUID
