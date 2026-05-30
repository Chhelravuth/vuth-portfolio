from pydantic import BaseModel, Field


class ProjectCreate(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    category: str = Field(pattern=r"^(web|design)$")
    description: str = Field(min_length=1, max_length=2000)
    image: str | None = None
    tags: list[str] = Field(default_factory=list)


class ProjectOut(BaseModel):
    id: int
    title: str
    category: str
    description: str
    image: str | None = None
    tags: list[str] = Field(default_factory=list)

    model_config = {"from_attributes": True}


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: str = Field(min_length=3, max_length=200, pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    message: str = Field(min_length=1, max_length=5000)


class ContactOut(BaseModel):
    id: int
    message: str = "Thank you! Your message has been received."

    model_config = {"from_attributes": True}
