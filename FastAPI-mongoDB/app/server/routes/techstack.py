"""
we'll add the routes to complement the database operations in the database file.

We'll be using the JSON Compatible Encoder from FastAPI to convert our models into a format that's JSON compatible.
"""

from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    # add_techstack,
    # delete_techstack,
    retrieve_techstack,
    retrieve_techstacks,
    # update_techstack,
)
from server.models.techstack import (
    ErrorResponseModel,
    ResponseModel,
    TechstackSchema,
    UpdateTechstackModel,
)

router = APIRouter()


@router.get("/", response_description="Techstacks retrieved")
async def get_techstacks():
    techstacks = await retrieve_techstacks()
    if techstacks:
        return ResponseModel(techstacks, "Techstacks data retrieved successfully")
    return ResponseModel(techstacks, "Empty list returned")


@router.get("/{name}", response_description="Techstack data retrieved")
async def get_techstack_data(name):
    techstack = await retrieve_techstack(name)
    if techstack:
        return ResponseModel(techstack, "Techstack data retrieved successfully")
    return ErrorResponseModel("An error occurred.", 404, "Techstack doesn't exist.")
