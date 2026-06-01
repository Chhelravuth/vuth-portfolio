import os
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from dotenv import load_dotenv

# ឡូដទិន្នន័យពីឯកសារ .env
load_dotenv()

# ទាញយក Link របស់ Supabase (បើគ្មាន ឱ្យរត់ទៅរក SQLite ក្នុងម៉ាស៊ីនសិន)
DB_PATH = Path(__file__).resolve().parent.parent / "portfolio.db"
DEFAULT_SQLITE = f"sqlite:///{DB_PATH}"
DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_SQLITE)

# បង្កើត Engine ឱ្យត្រូវតាមប្រភេទ Database
if DATABASE_URL.startswith("postgresql://") or DATABASE_URL.startswith("postgres://"):
    # កែទម្រង់ postgres:// ទៅជា postgresql:// ព្រោះ SQLAlchemy តម្រូវការបែបនេះ
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    engine = create_engine(DATABASE_URL)
else:
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Base(DeclarativeBase):
    pass
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
