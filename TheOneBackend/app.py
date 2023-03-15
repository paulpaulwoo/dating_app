from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def hello():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM users').fetchone()
    conn.close()
    print(posts[1])
    return str(posts[1])


if __name__ == "__main__":
  app.run()