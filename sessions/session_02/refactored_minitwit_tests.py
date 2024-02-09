# -*- coding: utf-8 -*-
"""
    MiniTwit Tests
    ~~~~~~~~~~~~~~

    Tests a MiniTwit application.

    :refactored: (c) 2024 by HelgeCPH from Armin Ronacher's original unittest version
    :copyright: (c) 2010 by Armin Ronacher.
    :license: BSD, see LICENSE for more details.
"""
import requests


# import schema
# import data
# otherwise use the database that you got previously
BASE_URL = "http://localhost:5000"

def register(username, password, password2=None, email=None):
    """Helper function to register a user"""
    if password2 is None:
        password2 = password
    if email is None:
        email = username + '@example.com'
    return requests.post(f'{BASE_URL}/register', data={
        'username':     username,
        'password':     password,
        'password2':    password2,
        'email':        email,
    }, allow_redirects=True)

def login(username, password):
    """Helper function to login"""
    http_session = requests.Session()
    r = http_session.post(f'{BASE_URL}/login', data={
        'username': username,
        'password': password
    }, allow_redirects=True)
    return r, http_session

def register_and_login(username, password):
    """Registers and logs in in one go"""
    register(username, password)
    return login(username, password)

def logout(http_session):
    """Helper function to logout"""
    return http_session.get(f'{BASE_URL}/logout', allow_redirects=True)

def add_message(http_session, text):
    """Records a message"""
    r = http_session.post(f'{BASE_URL}/add_message', data={'text': text},
                                allow_redirects=True)
    if text:
        assert 'Your message was recorded' in r.text
    return r

# testing functions

def test_register():
    """Make sure registering works"""
    r = register('user1', 'default')
    assert 'You were successfully registered ' \
           'and can login now' in r.text
    r = register('user1', 'default')
    assert 'The username is already taken' in r.text
    r = register('', 'default')
    assert 'You have to enter a username' in r.text
    r = register('meh', '')
    assert 'You have to enter a password' in r.text
    r = register('meh', 'x', 'y')
    assert 'The two passwords do not match' in r.text
    r = register('meh', 'foo', email='broken')
    assert 'You have to enter a valid email address' in r.text

def test_login_logout():
    """Make sure logging in and logging out works"""
    r, http_session = register_and_login('user1', 'default')
    assert 'You were logged in' in r.text
    r = logout(http_session)
    assert 'You were logged out' in r.text
    r, _ = login('user1', 'wrongpassword')
    assert 'Invalid password' in r.text
    r, _ = login('user2', 'wrongpassword')
    assert 'Invalid username' in r.text

def test_message_recording():
    """Check if adding messages works"""
    _, http_session = register_and_login('foo', 'default')
    add_message(http_session, 'test message 1')
    add_message(http_session, '<test message 2>')
    r = requests.get(f'{BASE_URL}/')
    assert 'test message 1' in r.text
    assert '&lt;test message 2&gt;' in r.text

def test_timelines():
    """Make sure that timelines work"""
    _, http_session = register_and_login('foo', 'default')
    add_message(http_session, 'the message by foo')
    logout(http_session)
    _, http_session = register_and_login('bar', 'default')
    add_message(http_session, 'the message by bar')
    r = http_session.get(f'{BASE_URL}/public')
    assert 'the message by foo' in r.text
    assert 'the message by bar' in r.text

    # bar's timeline should just show bar's message
    r = http_session.get(f'{BASE_URL}/')
    assert 'the message by foo' not in r.text
    assert 'the message by bar' in r.text

    # now let's follow foo
    r = http_session.get(f'{BASE_URL}/foo/follow', allow_redirects=True)
    assert 'You are now following &#34;foo&#34;' in r.text

    # we should now see foo's message
    r = http_session.get(f'{BASE_URL}/')
    assert 'the message by foo' in r.text
    assert 'the message by bar' in r.text

    # but on the user's page we only want the user's message
    r = http_session.get(f'{BASE_URL}/bar')
    assert 'the message by foo' not in r.text
    assert 'the message by bar' in r.text
    r = http_session.get(f'{BASE_URL}/foo')
    assert 'the message by foo' in r.text
    assert 'the message by bar' not in r.text

    # now unfollow and check if that worked
    r = http_session.get(f'{BASE_URL}/foo/unfollow', allow_redirects=True)
    assert 'You are no longer following &#34;foo&#34;' in r.text
    r = http_session.get(f'{BASE_URL}/')
    assert 'the message by foo' not in r.text
    assert 'the message by bar' in r.text

