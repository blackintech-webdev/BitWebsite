from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID

class EventCreate(BaseModel):
    name: str
    date_time: datetime
    location: Optional[str] = None 

class EventUpdate(BaseModel):
    name: Optional[str] = None
    date_time: Optional[datetime] = None
    location: Optional[str] = None

class EventOut(EventCreate):
    id: UUID
    
    class Config:
        from_attributes = True