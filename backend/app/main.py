from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import Base, SessionLocal, engine, get_db
from .models import ContactMessage, Project
from .schemas import ContactIn, ContactOut, ProjectCreate, ProjectOut
from .seed import seed_projects

CORS_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5175",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
]


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_projects(db)
    finally:
        db.close()
    yield


app = FastAPI(
    title="Chhel Ravuth Portfolio API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1):\d+",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "ok", "message": "Portfolio API is running"}


@app.get("/api/projects", response_model=list[ProjectOut])
def list_projects(
    category: str | None = None,
    db: Session = Depends(get_db),
):
    query = db.query(Project).order_by(Project.id)
    if category and category != "all":
        query = query.filter(Project.category == category)
    return query.all()


@app.post("/api/projects", response_model=ProjectOut, status_code=201)
def create_project(payload: ProjectCreate, db: Session = Depends(get_db)):
    project = Project(**payload.model_dump())
    db.add(project)
    db.commit()
    db.refresh(project)
    return project


@app.get("/api/projects/{project_id}", response_model=ProjectOut)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@app.post("/api/contact", response_model=ContactOut, status_code=201)
def create_contact(payload: ContactIn, db: Session = Depends(get_db)):
    entry = ContactMessage(
        name=payload.name,
        email=payload.email,
        message=payload.message,
    )
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return ContactOut(id=entry.id)
