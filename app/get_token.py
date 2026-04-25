import os
from dotenv import load_dotenv
from config import supabase

load_dotenv()

res = supabase.auth.sign_in_with_password({
    "email": os.getenv("ADMIN_EMAIL"),
    "password": os.getenv("ADMIN_PASSWORD")
})

print(res.session.access_token)