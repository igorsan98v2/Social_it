import sqlite3

conn = sqlite3.connect("db.sqlite3")

p = conn.execute("SELECT * FROM places")
for i in p:
    print(i)

conn.commit()

conn.close()