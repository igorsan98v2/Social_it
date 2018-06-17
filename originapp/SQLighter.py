import sqlite3

def get_markers():
    res = []
    conn = sqlite3.connect('db.sqlite3')
    with conn:
        for i in conn.execute("SELECT * FROM places"):
            res.append(i)

    return res