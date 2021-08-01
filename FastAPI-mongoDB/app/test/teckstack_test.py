# Mounting the directory to app
import os
import sys
sys.path.insert(0, os.getcwd())

from server.database import connect
from dotenv import load_dotenv

from test.fail_secrets import CONNECTION_STRING_FAIL

def test_mongoDB_connection_correct():
    check = False
    
    load_dotenv()
    CONNECTION_STRING=os.getenv('CONNECTION_STRING')
    # Connecting to MongoDB and getting the database test_db with the collection name repositories
    try:
        database = connect.DatabaseConnection(CONNECTION_STRING)
        database.client.server_info()
        database.connection_to_db("test_db")
        check = True
    except Exception as e: 
       
        print(e)
    assert check, "There is an issue in connection with MongoDB either in database name or authentication"


def test_mongoDB_connection_fail():
    check = True
    # Connecting to false string MongoDB and getting the database test_db with the collection name repositories
    try:
        database = connect.DatabaseConnection(CONNECTION_STRING_FAIL)
        database.client.server_info()
        database.connection_to_db("test_db")
    except Exception as e: 
        check = False
        print(e)
    assert not check, "There should be an issue in connection with MongoDB for authentication"

 