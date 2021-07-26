import motor.motor_asyncio
from bson.objectid import ObjectId
# we'll configure Motor, an asynchronous MongoDB driver, to interact with the database.

# Here, we imported Motor, defined the connection details, and created a client via AsyncIOMotorClient.

"""
We then referenced a database called techstacks and a collection (akin to a table in a relational database) called techstacks_collection. Since these are just references and not actual I/O, neither requires an await expression. When the first I/O operation is made, both the database and collection will be created if they don't already exist.

Next, create a quick helper function for parsing the results from a database query into a Python dict.
"""

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.techstacks

techstack_collection = database.get_collection("techstacks_collection")

# helpers


def techstack_helper(techstack) -> dict:
    return {
        "id": str(techstack["_id"]),
        "techstack_name": techstack["techstack_name"],
        "link": techstack["link"],
        "date_created": techstack["date_created"],
        "size_mb": techstack["size_mb"],
        "num_of_commits": techstack["num_of_commits"],
    }
    
# Retrieve all techstacks present in the database
async def retrieve_techstacks():
    techstacks = []
    async for techstack in techstack_collection.find():
        techstacks.append(techstack_helper(techstack))
    return techstacks

"""
Below, we defined the asynchronous operations to create, read, update and delete techstack data in the database via motor.

In the update and delete operations, the techstack is searched for in the database to decide whether to carry out the operation or not. The return values guide how to send responses to the user which we'll be working on in the next section.
"""

# Add a new techstack into to the database
async def add_techstack(techstack_data: dict) -> dict:
    techstack = await techstack_collection.insert_one(techstack_data)
    new_techstack = await techstack_collection.find_one({"_id": techstack.inserted_id})
    return techstack_helper(new_techstack)


# Retrieve a techstack with a matching ID
async def retrieve_techstack(id: str) -> dict:
    techstack = await techstack_collection.find_one({"_id": ObjectId(id)})
    if techstack:
        return techstack_helper(techstack)


# Update a techstack with a matching ID
async def update_techstack(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    techstack = await techstack_collection.find_one({"_id": ObjectId(id)})
    if techstack:
        updated_techstack = await techstack_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_techstack:
            return True
        return False


# Delete a techstack from the database
async def delete_techstack(id: str):
    techstack = await techstack_collection.find_one({"_id": ObjectId(id)})
    if techstack:
        await techstack_collection.delete_one({"_id": ObjectId(id)})
        return True