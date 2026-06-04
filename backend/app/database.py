import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ១. ទាញយក Connection String ពី Environment Variable របស់ Render
DATABASE_URL = os.getenv("DATABASE_URL")

# ២. ប្រព័ន្ធការពារ៖ បើសិនជា Render ផ្ដល់លីង Supabase ដែលផ្ដើមដោយ postgres:// 
# យើងត្រូវដូរវាទៅជា postgresql:// ឱ្យត្រូវស្តង់ដារ SQLAlchemy 2.0 ដាច់ខាត
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# ៣. បង្កើត Engine ដោយសុវត្ថិភាព (ករណីគ្មានលីង ឱ្យវាហៅ SQLite បណ្ដោះអាសន្នកុំឱ្យ Server ងាប់)
# ៣. បង្កើត Engine ដោយសុវត្ថិភាព (បើតម្លៃទទេ ឬគ្មានលីង ឱ្យវាហៅ SQLite កុំឱ្យ Server ងាប់)
db_url = DATABASE_URL
if not db_url:
    db_url = "sqlite:///./portfolio.db"

# ហៅ Engine ដោយប្រើប្រាស់ db_url ដែលមានប្រព័ន្ធការពាររួចរាល់
engine = create_engine(db_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()