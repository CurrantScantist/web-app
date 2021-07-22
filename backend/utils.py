import pymongo
from secrets import CONNECTION_STRING 

client = pymongo.MongoClient(CONNECTION_STRING)
db_name = client['test_2_db']
collection_name = db_name['test']
#let's create two documents
# medicine_1 = {
#     "medicine_id": "RR000123456",
#     "common_name" : "Paracetamol",
#     "scientific_name" : "",
#     "available" : "Y",
#     "category": "fever"
# }
# medicine_2 = {
#     "medicine_id": "RR000342522",
#     "common_name" : "Metformin",
#     "scientific_name" : "",
#     "available" : "Y",
#     "category" : "type 2 diabetes"
# }
# collection_name.insert_many([medicine_1, medicine_2])
# # Check the count
count = collection_name.count()
print(count)
# Read the documents
med_details = collection_name.find({'medicine_id': "RR000123456"})
# Print on the terminal
for r in med_details:
    print(r["common_name"])