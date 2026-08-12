import sqlite3

from app import app


def test_register_persists_user_to_db():
    conn = sqlite3.connect('user.db')
    conn.execute("DELETE FROM users WHERE email = ?", ('pytest-user@example.com',))
    conn.commit()
    conn.close()

    client = app.test_client()
    response = client.post(
        '/api/register',
        json={
            'name': 'Pytest User',
            'email': 'pytest-user@example.com',
            'password': 'secret',
            'dob': '2000-01-01',
            'gender': 'female',
            'course': 'Python'
        }
    )

    assert response.status_code == 200
    conn = sqlite3.connect('user.db')
    row = conn.execute(
        'SELECT email FROM users WHERE email = ?', ('pytest-user@example.com',)
    ).fetchone()
    conn.close()
    assert row is not None
