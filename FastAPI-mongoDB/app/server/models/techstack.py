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

    class Config:
        schema_extra = {
            "example": {
                "id": "60fc0777f113c31336c7e596",
                "releases": {
                    "v3.40.0": {}
                },
                "techstack_name": "svelte",
                "owner": "sveltejs",
                "description": "Cybernetically enhanced web apps",
                "forks": 2317,
                "forks_count": 2317,
                "language": "TypeScript",
                "stargazers_count": 48744,
                "watchers_count": 48744,
                "watchers": 48744,
                "size": 67214,
                "default_branch": "master",
                "open_issues_count": 573,
                "open_issues": 573,
                "has_issues": True,
                "archived": False,
                "disabled": False,
                "pushed_at": "2021-07-24T18:30:36Z",
                "created_at": "2016-11-20T18:13:05Z",
                "updated_at": "2021-07-25T03:36:42Z",
                "languages": {
                    "TypeScript": 714949,
                    "Svelte": 557000,
                    "JavaScript": 9669
                },
                "topics": [
                    "template",
                    "ui",
                    "compiler"
                ]
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
                "id": "60fc0777f113c31336c7e596",
                "releases": {
                    "v3.40.0": {}
                },
                "techstack_name": "svelte",
                "owner": "sveltejs",
                "description": "Cybernetically enhanced web apps",
                "forks": 2317,
                "forks_count": 2317,
                "language": "TypeScript",
                "stargazers_count": 48744,
                "watchers_count": 48744,
                "watchers": 48744,
                "size": 67214,
                "default_branch": "master",
                "open_issues_count": 573,
                "open_issues": 573,
                "has_issues": True,
                "archived": False,
                "disabled": False,
                "pushed_at": "2021-07-24T18:30:36Z",
                "created_at": "2016-11-20T18:13:05Z",
                "updated_at": "2021-07-25T03:36:42Z",
                "languages": {
                    "TypeScript": 714949,
                    "Svelte": 557000,
                    "JavaScript": 9669
                },
                "topics": [
                    "template",
                    "ui",
                    "compiler"
                ]
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