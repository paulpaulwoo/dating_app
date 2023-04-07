import re
from sqlalchemy import pool

authentication_data = dict()


def account_creation(conn: pool.PoolProxiedConnection, username: str, password: str, email: str) -> int:
    """
    Checks if user data is valid, then checks for duplicates in username and email,
    and if there's no problem, store user data paired with email verification key,
    and sends the key via email.

    Args:
        conn: Connection to the database
        username: User's username input
        password: User's password input
        email: User's email input

    Return Codes:
        0: OK, sent email verification and linked user data
        1: Duplicate Username
        2: Duplicate Email
        3: Duplicate Username and Email
        4: Invalid data, most likely not through the app
    """
    duplicate_email = False
    duplicate_username = False
    invalid_data = False #Safeguard for raw HTTP requests

    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    username_pattern = r'^[^\s\\]{8,15}$'
    password_pattern = r'^[^\s\\]{8,15}$'
    match = re.match(email_pattern, email)
    if match is None:
        invalid_data = True
    match = re.match(username_pattern, username)
    if match is None:
        invalid_data = True
    match = re.match(password_pattern, password)
    if match is None:
        invalid_data = True
    
    if invalid_data is True:
        return 4 #invalid data
    
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM mytable WHERE username = ?", (username,))
    result = cursor.fetchone()
    if result is not None:
        duplicate_username = True
    cursor.execute("SELECT * FROM mytable WHERE email = ?", (email,))
    result = cursor.fetchone()
    if result is not None:
        duplicate_email = True
    if (duplicate_username and duplicate_email):
        return 3
    if duplicate_email:
        return 2
    if duplicate_username:
        return 1
    


    