from flask import Flask, render_template, request
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, pool
import login

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
engine = create_engine('sqlite:///database.db', poolclass=pool.QueuePool)
pool = pool.QueuePool(lambda: engine.connect(), max_overflow=10, pool_size=5)

"""
@app.route('/')
def index():
    conn = pool.connect()
    result = conn.execute('SELECT * FROM mytable')
    rows = result.fetchall()
    conn.close()
    return str(rows)
    """



@app.route("/")
def hello():
    conn = pool.connect()
    posts = conn.execute('SELECT * FROM users').fetchone()
    conn.close()
    print(posts[1])
    return str(posts[1])

@app.route("/emailVerification", methods = ['POST'])
def emailVerification():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']
    conn = pool.connect()
    return_code = login.account_creation(conn, username, password, email)
    conn.close()




if __name__ == "__main__":
  app.run()