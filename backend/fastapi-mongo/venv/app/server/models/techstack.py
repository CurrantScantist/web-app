from typing import Optional

from pydantic import BaseModel, EmailStr, Field

# Pydantic Schema's are used for validating data along with serializing (JSON -> Python) and de-serializing (Python -> JSON). It does not serve as a Mongo schema validator, in other words.

# we define a Pydantic Schema called TechstackSchema that represents how the techstack data will be stored in your MongoDB database.
class TechstackSchema(BaseModel):
    techstack_name: str = Field(...)
    link: str = Field(...)
    date_created: str = Field(...)
    size_mb: float = Field(...)
    num_of_commits: float = Field(...)
    
    """
    NOT RELEVANT AS IT IS REMOVED FOR NOW 26/07/2021.
    In the gpa and year field in the TechstackSchema, we added the validators gt, lt, and le:

    gt and lt in the year field ensures that the value passed is greater than 0 and less than 9. As a result, values such as 0, 10, 11, will result in errors.
    le validator in the gpa field ensures that the value passed is less than or equal to 4.0.
    
    This schema will help users send HTTP requests with the proper shape to the API -- e.g., the type of data to send and how to send it.
    
    FastAPI uses Pyantic Schemas to automatically document data models in conjunction with Json Schema. Swagger UI then renders the data from the generated data models.
    """

    class Config:
        schema_extra = {
            "example": {
                "techstack_name": "php",
                "link": "https://github.com/php/php-src",
                "date_created": "26-Jul_1997",
                "size_mb": 20,
                "num_of_commits": "150710",
            }
        }


class UpdateTechstackModel(BaseModel):
    techstack_name: Optional[str]
    link: Optional[str]
    date_created: Optional[str]
    size_mb: Optional[float]
    num_of_commits: Optional[float]

    class Config:
        schema_extra = {
            "example": {
                "techstack_name": "php",
                "link": "https://github.com/php/php-src",
                "date_created": "26-Jul_1997",
                "size_mb": 21,
                "num_of_commits": "150717",
            }
        }


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}