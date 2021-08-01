#!/usr/bin/env python3
import motor.motor_asyncio
from bson.objectid import ObjectId


"""
MongoDB server seperate connection class to make more maintaniable and extensible

"""


class DatabaseConnection:
    def __init__ (self, CONNECTION_STRING):
            self.MONGO_DETAILS = CONNECTION_STRING
            self.client = motor.motor_asyncio.AsyncIOMotorClient(self.MONGO_DETAILS)
            self.database_name = None

    def connection_to_db(self, db_name):
        if db_name == "test_db":
          self.database_name = self.client.test_db



