from fastapi import FastAPI
import uvicorn
from starlette.requests import Request
from datetime import datetime
import sqlite3
from pydantic import BaseModel

app = FastAPI()

connect = sqlite3.connect("ExamCountdownWEBLog.db", check_same_thread=False)
cursor = connect.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS log(time TEXT, ip TEXT)")


class Post(BaseModel):
    ip: str
    time: str


@app.get("/get")
def get(ip: str, time: str):
    print("[{}] [WEB/PULL] {}".format(time, ip))
    cursor.execute(
        "INSERT INTO log(time, ip) VALUES (?,?)",
        (time, ip),
    )
    connect.commit()


if __name__ == "__main__":
    uvicorn.run("server:app", host="192.168.0.2", port=8123)
