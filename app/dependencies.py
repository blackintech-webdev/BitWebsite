from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.config import supabase

security = HTTPBearer()


async def require_auth(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    print(f"Token received: {token[:20]}...")  # debug
    try:
        user = supabase.auth.get_user(token)
        print(f"User: {user}")  # debug
        if not user or not user.user:
            raise HTTPException(status_code=401, detail="Invalid or expired token")
        return user.user
    except HTTPException:
        raise
    except Exception as e:
        print(f"Auth error: {e}")  # debug
        raise HTTPException(status_code=401, detail=str(e))
