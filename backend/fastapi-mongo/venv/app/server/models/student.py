from typing import Optional

from pydantic import BaseModel, EmailStr, Field

# Pydantic Schema's are used for validating data along with serializing (JSON -> Python) and de-serializing (Python -> JSON). It does not serve as a Mongo schema validator, in other words.

# we define a Pydantic Schema called StudentSchema that represents how the student data will be stored in your MongoDB database.
class StudentSchema(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    course_of_study: str = Field(...)
    year: int = Field(..., gt=0, lt=9)
    gpa: float = Field(..., le=4.0)
    
    """
    In the gpa and year field in the StudentSchema, we added the validators gt, lt, and le:

    gt and lt in the year field ensures that the value passed is greater than 0 and less than 9. As a result, values such as 0, 10, 11, will result in errors.
    le validator in the gpa field ensures that the value passed is less than or equal to 4.0.
    
    This schema will help users send HTTP requests with the proper shape to the API -- e.g., the type of data to send and how to send it.
    
    FastAPI uses Pyantic Schemas to automatically document data models in conjunction with Json Schema. Swagger UI then renders the data from the generated data models.
    """

    class Config:
        schema_extra = {
            "example": {
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "course_of_study": "Water resources engineering",
                "year": 2,
                "gpa": "3.0",
            }
        }


class UpdateStudentModel(BaseModel):
    fullname: Optional[str]
    email: Optional[EmailStr]
    course_of_study: Optional[str]
    year: Optional[int]
    gpa: Optional[float]

    class Config:
        schema_extra = {
            "example": {
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "course_of_study": "Water resources and environmental engineering",
                "year": 4,
                "gpa": "4.0",
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