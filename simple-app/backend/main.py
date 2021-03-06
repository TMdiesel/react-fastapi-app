from typing import List
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session


app = FastAPI()


@app.get("/hello")
async def hello():
    return {"message": "Hello World"}
