from sqlalchemy.orm import Session

from .models import Project

SEED_PROJECTS = [
    {
        "title": "E-Commerce Dashboard",
        "category": "web",
        "description": "React + Tailwind admin with dynamic product management.",
        "image": None,
        "tags": ["React", "Tailwind", "API"],
    },
    {
        "title": "Brand Identity — Café Noir",
        "category": "design",
        "description": "Logo system, menu design, and social templates in Illustrator.",
        "image": None,
        "tags": ["Illustrator", "Photoshop"],
    },
    {
        "title": "Motion Reel Intro",
        "category": "design",
        "description": "15s cinematic opener built in After Effects.",
        "image": None,
        "tags": ["After Effects"],
    },
    {
        "title": "Portfolio API",
        "category": "web",
        "description": "FastAPI backend for projects, bio, and contact submissions.",
        "image": None,
        "tags": ["FastAPI", "PostgreSQL"],
    },
]


def seed_projects(db: Session) -> None:
    if db.query(Project).count() > 0:
        return

    for item in SEED_PROJECTS:
        db.add(Project(**item))

    db.commit()
