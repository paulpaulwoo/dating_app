import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO users (username, pass, bio) VALUES (?, ?, ?)",
            ('First Post', 'Content for the first post', 'some fake bio')
            )

cur.execute("INSERT INTO users (username, pass, bio) VALUES (?, ?, ?)",
            ('Second Post', 'Content for the second post', 'some fake bio')
            )

connection.commit()
connection.close()