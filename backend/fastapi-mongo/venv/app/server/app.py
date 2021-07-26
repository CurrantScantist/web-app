from fastapi import FastAPI

from app.server.routes.student import router as StudentRouter # Wiring up the student route in app/server/app.py

# Before starting the server via the entry point file, create a base route in app/server/app.py:

app = FastAPI()

app.include_router(StudentRouter, tags=["Student"], prefix="/student")

# Tags are identifiers used to group routes. Routes with the same tags are grouped into a section on the API documentation.

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

