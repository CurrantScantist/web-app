"""
we'll add the routes to complement the database operations in the database file.

We'll be using the JSON Compatible Encoder from FastAPI to convert our models into a format that's JSON compatible.
"""

from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    add_techstack,
    delete_techstack,
    retrieve_techstack,
    retrieve_techstacks,
    update_techstack,
)
from server.models.techstack import (
    ErrorResponseModel,
    ResponseModel,
    TechstackSchema,
    UpdateTechstackModel,
)

router = APIRouter()

# handler for creating a new Techstack:

@router.post("/", response_description="Techstack data added into the database")
async def add_techstack_data(techstack: TechstackSchema = Body(...)):
    techstack = jsonable_encoder(techstack)
    new_techstack = await add_techstack(techstack)
    return ResponseModel(new_techstack, "Techstack added successfully.")

"""
So, the route expects a payload that matches the format of TechstackSchema. Example:

{
    "techstack_name": "php",
    "link": "https://github.com/php/php-src",
    "date_created": "26-Jul_1997",
    "size_mb": 21,
    "num_of_commits": "150717",
}
"""

@router.get("/", response_description="Techstacks retrieved")
async def get_techstacks():
    techstacks = await retrieve_techstacks()
    if techstacks:
        return ResponseModel(techstacks, "Techstacks data retrieved successfully")
    return ResponseModel(techstacks, "Empty list returned")


@router.get("/{id}", response_description="Techstack data retrieved")
async def get_techstack_data(id):
    techstack = await retrieve_techstack(id)
    if techstack:
        return ResponseModel(techstack, "Techstack data retrieved successfully")
    return ErrorResponseModel("An error occurred.", 404, "Techstack doesn't exist.")

@router.put("/{id}")
async def update_techstack_data(id: str, req: UpdateTechstackModel = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_techstack = await update_techstack(id, req)
    if updated_techstack:
        return ResponseModel(
            "Techstack with ID: {} name update is successful".format(id),
            "Techstack name updated successfully",
        )
    return ErrorResponseModel(
        "An error occurred",
        404,
        "There was an error updating the techstack data.",
    )
    

@router.delete("/{id}", response_description="Techstack data deleted from the database")
async def delete_techstack_data(id: str):
    deleted_techstack = await delete_techstack(id)
    if deleted_techstack:
        return ResponseModel(
            "Techstack with ID: {} removed".format(id), "Techstack deleted successfully"
        )
    return ErrorResponseModel(
        "An error occurred", 404, "Techstack with id {0} doesn't exist".format(id)
    )