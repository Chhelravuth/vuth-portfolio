import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ១. ទាញយក Connection String ពី Environment Variable របស់ Render
DATABASE_URL = os.getenv("DATABASE_URL")

# ប្រសិនបើគ្មាន DATABASE_URL ឱ្យប្រើ SQLite បណ្ដោះអាសន្ន
if not DATABASE_URL:
    DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()