import motor.motor_asyncio
from bson.objectid import ObjectId
from server.secrets import CONNECTION_STRING 
# we'll configure Motor, an asynchronous MongoDB driver, to interact with the database.

# Here, we imported Motor, defined the connection details, and created a client via AsyncIOMotorClient.

"""
We then referenced a database called techstacks and a collection (akin to a table in a relational database) called techstacks_collection. Since these are just references and not actual I/O, neither requires an await expression. When the first I/O operation is made, both the database and collection will be created if they don't already exist.

Next, create a quick helper function for parsing the results from a database query into a Python dict.
"""

MONGO_DETAILS = CONNECTION_STRING

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

# database = client.techstacks
database = client.test_db

techstack_collection = database.get_collection("repositories")

# helpers


def techstack_helper(techstack) -> dict:
    return {
        "id": str(techstack["_id"]),
        "releases": techstack["releases"],
        "name": techstack["name"],
        "owner": techstack["owner"],
        "description": techstack["description"],
        "forks": techstack["forks"],
        "forks_count": techstack["forks_count"],
        "language": techstack["language"],
        "stargazers_count": techstack["stargazers_count"],
        "watchers_count": techstack["watchers_count"],
        "watchers": techstack["watchers"],
        "size": techstack["size"],
        "default_branch": techstack["default_branch"],
        "open_issues_count": techstack["open_issues_count"],
        "open_issues": techstack["open_issues"],
        "has_issues": techstack["has_issues"],
        "archived": techstack["archived"],
        "disabled": techstack["disabled"],
        "pushed_at": techstack["pushed_at"],
        "created_at": techstack["created_at"],
        "updated_at": techstack["updated_at"],
        "languages": techstack["languages"],
        "topics": techstack["topics"],
    }
    
# Retrieve all techstacks present in the database
async def retrieve_techstacks():
    techstacks = []
    async for techstack in techstack_collection.find():
        techstacks.append(techstack_helper(techstack))
    print(techstacks)
    return techstacks


# Retrieve a techstack with a matching ID
async def retrieve_techstack(name: str, owner:str) -> dict:
    # techstack = await techstack_collection.find({"name": name, "owner": owner}) # finds first occurence of name and owner combo
    techstack = await techstack_collection.find_one({"name": name}) and await techstack_collection.find_one({"owner": owner})
    # techstack = await techstack_collection.find_one({"name": name})
    if techstack:
        return techstack_helper(techstack)
