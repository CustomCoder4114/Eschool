from flask import Flask, render_template, request, redirect, url_for, session, jsonify, send_from_directory, flash, Response, abort
import sqlite3
import os
import uuid
import json
import random
import hashlib
import re
from urllib.parse import urlparse, parse_qs
from datetime import datetime, timedelta, timezone
from werkzeug.utils import secure_filename
from authlib.integrations.flask_client import OAuth
from flask_mail import Mail, Message
import math
import sqlite3
from flask import jsonify, request, session

app = Flask(__name__)

# Secret key now comes from an environment variable instead of being
# hardcoded in source. Falls back to the old value only so local dev
# doesn't break if the env var isn't set yet — set FLASK_SECRET_KEY
# before deploying anywhere real.
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "super_secret_key_123")

# ============ GOOGLE OAUTH ============
# Requires: pip install Authlib
# Requires env vars: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
# Redirect URI to register in Google Cloud Console:
#   http://localhost:5000/login/google/callback  (add your prod URL too)
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id=os.environ.get("GOOGLE_CLIENT_ID"),
    client_secret=os.environ.get("GOOGLE_CLIENT_SECRET"),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

# ============ EMAIL (contact form) ============
# Requires: pip install Flask-Mail
# Requires env vars: MAIL_USERNAME (a real Gmail address) and
# MAIL_PASSWORD (a 16-character Gmail "App Password" — Google Account ->
# Security -> 2-Step Verification -> App Passwords — NOT your normal
# Gmail login password).
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', '')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', '')
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

# Every contact-form submission is emailed to this inbox.
CONTACT_RECEIVER_EMAIL = 'kibetdan4114@gmail.com'

# Configuration for file uploads
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {
    'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'mp4', 'mp3', 'mov', 'avi', 'mkv', 
    'webm', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'zip', 'rar', '7z', 
    'py', 'js', 'html', 'css', 'java', 'c', 'cpp', 'php', 'sql', 'json', 'xml',
    'md', 'rtf', 'odt', 'epub', 'key', 'odp', 'ods', 'csv'
}
MAX_CONTENT_LENGTH = 2 * 1024 * 1024 * 1024  # 2GB max file size
CHUNK_SIZE = 10 * 1024 * 1024  # 10MB chunks

# Image extensions allowed specifically for a custom thumbnail upload
# (kept separate from ALLOWED_EXTENSIONS since a thumbnail must always
# be a displayable image, regardless of what the main file itself is)
THUMBNAIL_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

# ============ QUOTES ============
QUOTES = [
    {"text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
    {"text": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
    {"text": "An investment in knowledge pays the best interest.", "author": "Benjamin Franklin"},
    {"text": "One child, one teacher, one book, one pen can change the world.", "author": "Malala Yousafzai"},
    {"text": "The roots of education are bitter, but the fruit is sweet.", "author": "Aristotle"},
    {"text": "Every expert was once a beginner. Keep learning, keep growing.", "author": "Anonymous"},
    {"text": "The beautiful thing about learning is that nobody can take it away from you.", "author": "B.B. King"},
    {"text": "Learning never exhausts the mind.", "author": "Leonardo da Vinci"},
    {"text": "Live as if you were to die tomorrow. Learn as if you were to live forever.", "author": "Mahatma Gandhi"},
    {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"text": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
    {"text": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
    {"text": "Everything you've ever wanted is sitting on the other side of fear.", "author": "George Addair"},
    {"text": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
    {"text": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
    {"text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"text": "The only impossible journey is the one you never begin.", "author": "Tony Robbins"},
    {"text": "Your limitation—it's only your imagination.", "author": "Anonymous"},
    {"text": "Push yourself, because no one else is going to do it for you.", "author": "Anonymous"},
    {"text": "Great things never come from comfort zones.", "author": "Anonymous"},
    {"text": "Dream it. Wish it. Do it.", "author": "Anonymous"},
    {"text": "Success doesn't just find you. You have to go out and get it.", "author": "Anonymous"},
    {"text": "The harder you work for something, the greater you'll feel when you achieve it.", "author": "Anonymous"},
    {"text": "Dream bigger. Do bigger.", "author": "Anonymous"},
    {"text": "Don't stop when you're tired. Stop when you're done.", "author": "Anonymous"},
    {"text": "Wake up with determination. Go to bed with satisfaction.", "author": "Anonymous"},
    {"text": "Do something today that your future self will thank you for.", "author": "Anonymous"},
    {"text": "Little things make big days.", "author": "Anonymous"},
    {"text": "It's going to be hard, but hard does not mean impossible.", "author": "Anonymous"},
    {"text": "The best time to start was yesterday. The next best time is now.", "author": "Anonymous"},
    {"text": "You don't have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
    {"text": "The expert in anything was once a beginner.", "author": "Helen Hayes"},
    {"text": "The only source of knowledge is experience.", "author": "Albert Einstein"},
    {"text": "Tell me and I forget. Teach me and I remember. Involve me and I learn.", "author": "Benjamin Franklin"},
    {"text": "Knowledge is power.", "author": "Francis Bacon"},
    {"text": "Learning is a treasure that will follow its owner everywhere.", "author": "Chinese Proverb"},
    {"text": "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", "author": "Brian Herbert"},
    {"text": "Education is not preparation for life; education is life itself.", "author": "John Dewey"},
    {"text": "The beautiful thing about learning is that no one can take it away from you.", "author": "B.B. King"},
    {"text": "Change is the end result of all true learning.", "author": "Leo Buscaglia"},
    {"text": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", "author": "Albert Einstein"},
    {"text": "The mind is not a vessel to be filled, but a fire to be kindled.", "author": "Plutarch"},
    {"text": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", "author": "Malcolm X"},
    {"text": "Learning never stops, it just changes direction.", "author": "Anonymous"},
    {"text": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", "author": "Dr. Seuss"},
    {"text": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
    {"text": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"text": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
]

def get_random_quote():
    """Get a random quote - changes on every page load"""
    return random.choice(QUOTES)

def get_daily_quote():
    """Get a quote based on the day of the year - changes daily"""
    today = datetime.now()
    day_of_year = today.timetuple().tm_yday
    return QUOTES[day_of_year % len(QUOTES)]

def get_user_quote(user_email):
    """
    Get a quote based on user's email hash - consistent per user
    Changes only when the user logs in again
    """
    hash_value = int(hashlib.md5(user_email.encode()).hexdigest(), 16)
    return QUOTES[hash_value % len(QUOTES)]

# Create upload directory if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(os.path.join(UPLOAD_FOLDER, 'temp'), exist_ok=True)
os.makedirs(os.path.join(UPLOAD_FOLDER, 'avatars'), exist_ok=True)

# Allowed file extensions for upload
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Get file type category
def get_file_category(filename):
    ext = filename.split('.')[-1].lower() if '.' in filename else ''
    
    if ext in ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm', 'm4v', 'mpg', 'mpeg']:
        return 'video'
    elif ext in ['mp3', 'wav', 'aac', 'flac', 'm4a', 'wma', 'ogg']:
        return 'audio'
    elif ext in ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'tiff', 'ico', 'webp']:
        return 'image'
    elif ext == 'pdf':
        return 'pdf'
    elif ext in ['doc', 'docx', 'txt', 'rtf', 'odt', 'epub', 'md']:
        return 'doc'
    elif ext in ['ppt', 'pptx', 'key', 'odp']:
        return 'presentation'
    elif ext in ['xls', 'xlsx', 'csv', 'ods']:
        return 'spreadsheet'
    elif ext in ['js', 'html', 'css', 'py', 'java', 'c', 'cpp', 'php', 'sql', 'json', 'xml', 'yml', 'yaml', 'sh', 'bat']:
        return 'code'
    elif ext in ['zip', 'rar', '7z', 'tar', 'gz', 'bz2']:
        return 'zip'
    else:
        return 'other'

# Get file icon
def get_file_icon(file_category):
    icons = {
        'video': 'fa-video',
        'audio': 'fa-music',
        'image': 'fa-image',
        'pdf': 'fa-file-pdf',
        'doc': 'fa-file-word',
        'presentation': 'fa-file-powerpoint',
        'spreadsheet': 'fa-file-excel',
        'code': 'fa-file-code',
        'zip': 'fa-file-archive',
        'other': 'fa-file'
    }
    return icons.get(file_category, 'fa-file')

# Get thumbnail URL
def get_thumbnail_url(file_category, course='general'):
    thumbnails = {
        'mathematics': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'science': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'programming': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'business': 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'arts': 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'languages': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'projects': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'assignments': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80',
        'general': 'https://images.unsplash.com/photo-1551989137-294a2c6a2c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=169&q=80'
    }
    
    if file_category == 'image':
        return 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    elif file_category == 'pdf':
        return 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    elif file_category == 'doc':
        return 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    elif file_category == 'code':
        return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    else:
        return thumbnails.get(course, thumbnails['general'])

# SQLite's CURRENT_TIMESTAMP stores naive UTC values like "2026-08-02 10:00:00"
# with no timezone marker. If sent to the browser as-is, `new Date(...)`
# interprets it as LOCAL time instead of UTC, throwing every displayed time
# off by the viewer's UTC offset. Tag it explicitly as UTC before returning it.
def to_iso_utc(sqlite_timestamp):
    if not sqlite_timestamp:
        return sqlite_timestamp
    return sqlite_timestamp.replace(' ', 'T') + 'Z'


def is_admin():
    """True if the logged-in session belongs to an admin."""
    return session.get('role') == 'admin'

def home_endpoint_for_role(role):
    """Which page each role lands on after login."""
    if role == 'admin':
        return 'admin_dashboard'
    if role == 'teacher':
        return 'teacher_dashboard'
    if role == 'parent':
        return 'parent_dashboard'
    return 'dashboard'   # students / learners

def create_notification(conn, user_id, title, message, icon='fa-bell', color='blue'):
    """
    Insert one notification row for a user. Caller owns the connection
    and is responsible for committing (so callers that create many
    notifications in a loop, like a broadcast, only commit once).
    """
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO notifications (user_id, title, message, icon, color)
        VALUES (?, ?, ?, ?, ?)
    ''', (user_id, title, message, icon, color))


def get_avatar_url(user_id, avatar_filename):
    """Build the public URL for a user's uploaded profile picture, or
    None if they haven't uploaded one. Centralized here so every route
    that returns a user to the frontend (messages, search, etc.) uses
    the exact same path the upload endpoint saves to."""
    if not avatar_filename:
        return None
    return f"/static/uploads/avatars/{user_id}/{avatar_filename}"


def get_display_username(firstname, lastname, email):
    """
    There's no dedicated `username` column on `users` (yet) — profile.html
    displays a handle like "superior111_" though, so build a stable one
    from what we do have: the local part of the email (before the @) when
    there is one, otherwise a lowercased firstname+lastname slug. This is
    derived, not stored, so it's automatically consistent everywhere this
    helper is used.
    """
    if email and '@' in email:
        local_part = email.split('@')[0].strip()
        if local_part:
            return local_part
    slug = f"{firstname or ''}{lastname or ''}".strip().lower().replace(' ', '')
    return slug or f"user"

# Initialize database tables
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Users table (already exists)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstname TEXT,
            lastname TEXT,
            email TEXT,
            password TEXT
        )
    ''')
    
    # Resources table for storing file metadata
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS resources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            title TEXT NOT NULL,
            description TEXT,
            category TEXT,
            resource_type TEXT,
            file_name TEXT NOT NULL,
            file_path TEXT NOT NULL,
            file_size INTEGER,
            file_category TEXT,
            file_extension TEXT,
            privacy TEXT DEFAULT 'public',
            difficulty TEXT DEFAULT 'beginner',
            views INTEGER DEFAULT 0,
            downloads INTEGER DEFAULT 0,
            likes INTEGER DEFAULT 0,
            featured INTEGER DEFAULT 0,
            duration TEXT,
            pages INTEGER DEFAULT 0,
            thumbnail_url TEXT,
            upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Messages table for real, persisted direct messages between users
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender_id INTEGER NOT NULL,
            receiver_id INTEGER NOT NULL,
            text TEXT NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_read INTEGER DEFAULT 0,
            is_broadcast INTEGER DEFAULT 0,
            FOREIGN KEY (sender_id) REFERENCES users (id),
            FOREIGN KEY (receiver_id) REFERENCES users (id)
        )
    ''')

    # Notifications table — powers the bell icon in the base template,
    # which already calls GET /notifications, POST /notifications/<id>/read,
    # and POST /notifications/read-all.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            message TEXT NOT NULL,
            icon TEXT DEFAULT 'fa-bell',
            color TEXT DEFAULT 'blue',
            is_read INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Complaints / support tickets table — backs admin_support.html's
    # /api/complaints, /api/complaints/<id>/read, /respond, and /resolve.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS complaints (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            subject TEXT NOT NULL,
            description TEXT,
            category TEXT DEFAULT 'other',
            priority TEXT DEFAULT 'medium',
            status TEXT DEFAULT 'pending',
            is_read INTEGER DEFAULT 0,
            response TEXT,
            response_date TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Per-user like tracking — one row per (resource, user) so a like can
    # only ever be counted once per person, and can be reversed (unlike).
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS resource_likes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            resource_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(resource_id, user_id),
            FOREIGN KEY (resource_id) REFERENCES resources (id),
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Per-user view tracking — one row per (resource, user) so repeat
    # views from the same person are never counted twice.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS resource_views (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            resource_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(resource_id, user_id),
            FOREIGN KEY (resource_id) REFERENCES resources (id),
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Follows — one row per (follower, following) pair so a follow can
    # only ever be counted once per person, and can be reversed (unfollow).
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS follows (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            follower_id INTEGER NOT NULL,
            following_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(follower_id, following_id),
            FOREIGN KEY (follower_id) REFERENCES users (id),
            FOREIGN KEY (following_id) REFERENCES users (id)
        )
    ''')

    # Per-user like tracking for the Learning Strategies Hub (strategies.html).
    # Strategies themselves are static, defined in that page's JavaScript —
    # only the like relationship needs to persist server-side so likes are
    # shared across devices/browsers instead of living in localStorage.
    # strategy_id here refers to the numeric id each strategy already has
    # in strategies.html's JS array (1, 2, 3, ...).
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS strategy_likes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            strategy_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(strategy_id, user_id),
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Community opinions (Learning Strategies Hub's "Community Opinions"
    # tab). Previously this lived entirely in the browser's localStorage
    # under the key 'learningOpinions', which meant an opinion — and its
    # like count — only existed on the device that posted it. Persisted
    # here instead, so opinions (and who's liked them) are shared across
    # every user and device, the same way strategy_likes already is.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS opinions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            text TEXT NOT NULL,
            tag TEXT DEFAULT 'general',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Per-user like tracking for opinions — same UNIQUE(opinion_id, user_id)
    # pattern as resource_likes / strategy_likes above, so a like can only
    # ever be counted once per person and can be reversed (unlike).
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS opinion_likes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            opinion_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(opinion_id, user_id),
            FOREIGN KEY (opinion_id) REFERENCES opinions (id),
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    # Add priority column if the table pre-dates this feature
    try:
        cursor.execute("ALTER TABLE complaints ADD COLUMN priority TEXT DEFAULT 'medium'")
    except sqlite3.OperationalError:
        pass  # column already exists

    # Add an avatar column to the existing users table if it isn't there
    try:
        cursor.execute('ALTER TABLE users ADD COLUMN avatar_filename TEXT')
    except sqlite3.OperationalError:
        pass  # column already exists

    # Add a country column so the header can show the user's flag/country
    try:
        cursor.execute('ALTER TABLE users ADD COLUMN country TEXT')
    except sqlite3.OperationalError:
        pass  # column already exists

    # Add a role column so we can tell admins apart from regular users.
    try:
        cursor.execute("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'student'")
    except sqlite3.OperationalError:
        pass  # column already exists

    # Add is_broadcast column to messages table if it doesn't exist
    try:
        cursor.execute("ALTER TABLE messages ADD COLUMN is_broadcast INTEGER DEFAULT 0")
    except sqlite3.OperationalError:
        pass  # column already exists

        cursor.execute('''
        CREATE TABLE IF NOT EXISTS live_classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            teacher_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            subject TEXT NOT NULL,
            grade TEXT DEFAULT 'Grade 10',
            description TEXT,
            topics TEXT,
            start_time TEXT NOT NULL,
            duration_min INTEGER NOT NULL DEFAULT 60,
            platform TEXT,
            stream_url TEXT NOT NULL,
            embed_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (teacher_id) REFERENCES users (id)
        )
    ''')
    
    conn.commit()
    conn.close()

# Call init_db to create tables
init_db()

# ============ RESOURCE SERIALIZATION ============

def serialize_resource(row, liked_by_current_user=False, following_uploader=False, uploader_followers_count=0):
    """
    Turn one `resources` row (joined with u.firstname, u.lastname,
    u.avatar_filename tacked on the end) into the JSON shape the
    resourses.html frontend expects.

    Expected row layout:
      0 id, 1 user_id, 2 title, 3 description, 4 category, 5 resource_type,
      6 file_name, 7 file_path, 8 file_size, 9 file_category,
      10 file_extension, 11 privacy, 12 difficulty, 13 views, 14 downloads,
      15 likes, 16 featured, 17 duration, 18 pages, 19 thumbnail_url,
      20 upload_date, 21 firstname, 22 lastname, 23 avatar_filename
    """
    user_id = row[1]
    firstname = row[21] if len(row) > 21 else None
    lastname = row[22] if len(row) > 22 else None
    avatar_filename = row[23] if len(row) > 23 else None

    author = f"{firstname} {lastname}".strip() if firstname and lastname else 'Anonymous'
    author_initials = f"{firstname[0]}{lastname[0]}" if firstname and lastname else 'AU'
    avatar_url = get_avatar_url(user_id, avatar_filename)
    file_url = f"/uploads/{user_id}/{row[6]}" if row[6] else ''
    is_own_resource = session.get('user_id') is not None and session.get('user_id') == user_id

    return {
        'id': row[0],
        'user_id': user_id,
        'title': row[2],
        'description': row[3],
        'category': row[4],
        'type': row[5],
        'file_name': row[6],
        'file_path': row[7],
        'file_size': row[8],
        'file_category': row[9],
        'file_extension': row[10],
        'privacy': row[11],
        'difficulty': row[12],
        'views': row[13],
        'views_count': row[13],
        'downloads': row[14],
        'likes': row[15],
        'likes_count': row[15],
        'featured': row[16],
        'duration': row[17],
        'pages': row[18],
        'thumbnail_url': row[19],
        'upload_date': to_iso_utc(row[20]),
        'author': author,
        'author_initials': author_initials,
        'uploader_username': author,
        'uploader_avatar_url': avatar_url,
        'uploader_followers_count': uploader_followers_count,
        'liked_by_current_user': liked_by_current_user,
        'following_uploader': following_uploader,
        'is_own_resource': is_own_resource,
        'file_url': file_url,
        'is_large_file': row[8] > 10 * 1024 * 1024 if row[8] else False
    }


def get_liked_resource_ids(cursor, user_id):
    """Set of resource ids the given user has liked, for batch lookups."""
    if not user_id:
        return set()
    cursor.execute('SELECT resource_id FROM resource_likes WHERE user_id = ?', (user_id,))
    return {row[0] for row in cursor.fetchall()}


def user_has_liked(cursor, resource_id, user_id):
    if not user_id:
        return False
    cursor.execute(
        'SELECT 1 FROM resource_likes WHERE resource_id = ? AND user_id = ?',
        (resource_id, user_id)
    )
    return cursor.fetchone() is not None


def get_following_ids(cursor, user_id):
    """Set of user ids the given user follows, for batch lookups."""
    if not user_id:
        return set()
    cursor.execute('SELECT following_id FROM follows WHERE follower_id = ?', (user_id,))
    return {row[0] for row in cursor.fetchall()}


def user_is_following(cursor, follower_id, target_user_id):
    if not follower_id:
        return False
    cursor.execute(
        'SELECT 1 FROM follows WHERE follower_id = ? AND following_id = ?',
        (follower_id, target_user_id)
    )
    return cursor.fetchone() is not None


def get_follower_counts(cursor, user_ids):
    """
    Map of user_id -> follower count, batched for a list of uploader ids
    in one query instead of one COUNT(*) per resource (N+1).
    """
    user_ids = [uid for uid in set(user_ids) if uid is not None]
    if not user_ids:
        return {}
    placeholders = ','.join('?' for _ in user_ids)
    cursor.execute(f'''
        SELECT following_id, COUNT(*) FROM follows
        WHERE following_id IN ({placeholders})
        GROUP BY following_id
    ''', user_ids)
    return {row[0]: row[1] for row in cursor.fetchall()}


def get_follow_counts_for_user(cursor, user_id):
    """(followers_count, following_count) for a single user."""
    cursor.execute('SELECT COUNT(*) FROM follows WHERE following_id = ?', (user_id,))
    followers_count = cursor.fetchone()[0]
    cursor.execute('SELECT COUNT(*) FROM follows WHERE follower_id = ?', (user_id,))
    following_count = cursor.fetchone()[0]
    return followers_count, following_count


def build_profile_context(target_user_id):
    """
    Everything profile.html needs for a given user id: identity, follow
    state relative to whoever's logged in, live counts, and their
    resources shown in the "posts" grid. Returns None if the user
    doesn't exist.
    """
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute(
        'SELECT id, firstname, lastname, email, avatar_filename FROM users WHERE id = ?',
        (target_user_id,)
    )
    row = cursor.fetchone()
    if not row:
        conn.close()
        return None

    user_id, firstname, lastname, email, avatar_filename = row

    followers_count, following_count = get_follow_counts_for_user(cursor, user_id)

    cursor.execute('SELECT COUNT(*) FROM resources WHERE user_id = ?', (user_id,))
    posts_count = cursor.fetchone()[0]

    cursor.execute('''
        SELECT id, thumbnail_url
        FROM resources
        WHERE user_id = ?
        ORDER BY upload_date DESC
        LIMIT 30
    ''', (user_id,))
    posts = [{'id': r[0], 'thumbnail_url': r[1]} for r in cursor.fetchall()]

    viewer_id = session.get('user_id')
    is_own_profile = viewer_id is not None and viewer_id == user_id
    is_following = user_is_following(cursor, viewer_id, user_id) if (viewer_id and not is_own_profile) else False

    conn.close()

    return dict(
        profile_user_id=user_id,
        username=get_display_username(firstname, lastname, email),
        firstname=firstname,
        lastname=lastname,
        avatar_url=get_avatar_url(user_id, avatar_filename),
        is_own_profile=is_own_profile,
        is_following=is_following,
        posts_count=posts_count,
        followers_count=followers_count,
        following_count=following_count,
        bio_lines=None,
        posts=posts
    )


# ============ STRATEGY LIKES (Learning Strategies Hub) ============
# strategies.html defines each learning strategy statically in its own
# JavaScript (title, steps, tips, etc. never touch the database) — only
# the *like relationship* needs a server-side home, so likes survive a
# cleared browser and are visible from any device the person logs into,
# instead of only living in that one browser's localStorage.

def get_liked_strategy_ids(cursor, user_id):
    """Set of strategy ids (as numbered in strategies.html) the given user has liked."""
    if not user_id:
        return set()
    cursor.execute('SELECT strategy_id FROM strategy_likes WHERE user_id = ?', (user_id,))
    return {row[0] for row in cursor.fetchall()}


def get_strategy_like_counts(cursor):
    """Map of strategy_id -> like count, for every strategy with at least one like."""
    cursor.execute('SELECT strategy_id, COUNT(*) FROM strategy_likes GROUP BY strategy_id')
    return {row[0]: row[1] for row in cursor.fetchall()}


# ============ OPINIONS (Learning Strategies Hub — Community Opinions) ============
# Unlike the static strategy list above, opinions are entirely
# user-generated (the text, the tag, and the like count), so — unlike
# strategy_likes, which only tracks a relationship against a static id —
# opinions need their own table for the content itself, plus the same
# opinion_likes relationship table for per-user like tracking.

def get_liked_opinion_ids(cursor, user_id):
    """Set of opinion ids the given user has liked."""
    if not user_id:
        return set()
    cursor.execute('SELECT opinion_id FROM opinion_likes WHERE user_id = ?', (user_id,))
    return {row[0] for row in cursor.fetchall()}


def serialize_opinion(row, liked_by_current_user=False):
    """
    row layout (opinions joined with users, plus a like-count subquery):
      0 id, 1 user_id, 2 text, 3 tag, 4 created_at, 5 firstname, 6 lastname, 7 likes
    """
    firstname = (row[5] or '').strip()
    lastname = (row[6] or '').strip()
    author = f"{firstname} {lastname}".strip() or 'Anonymous Learner'

    return {
        'id': row[0],
        'user_id': row[1],
        'text': row[2],
        'tag': row[3],
        'date': to_iso_utc(row[4]),
        'author': author,
        'likes': row[7] or 0,
        'liked_by_current_user': liked_by_current_user
    }

# ============ EXISTING ROUTES ===============

# teachers routes////////////////////////// 

@app.route('/teacher-dashboard')
def teacher_dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Only teachers belong here; everyone else goes to their own page.
    if session.get('role') != 'teacher':
        return redirect(url_for(home_endpoint_for_role(session.get('role'))))

    return render_template(
        'Teacher/teacher_dashboard.html',
        firstname=session['firstname'],
        lastname=session['lastname']
    )
    if session.get('role') == 'parent':
        return redirect(url_for('parent_dashboard'))

@app.route('/parent-dashboard')
def parent_dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Only parents belong here; everyone else goes to their own page.
    if session.get('role') != 'parent':
        return redirect(url_for(home_endpoint_for_role(session.get('role'))))

    return render_template(
        'Parent/parent-dashboard.html',
        firstname=session['firstname'],
        lastname=session['lastname']
    )

@app.route('/teacher-upload', methods=['GET', 'POST'])
def upload():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    return render_template('Teacher/teacher-upload.html',
                         firstname=session['firstname'],
                         lastname=session['lastname'],
                         user_id=session['user_id'])

@app.route('/teacher-messages')
def jmessage():
    return render_template('Teacher/teacher-messages.html')

@app.route('/teacher-resourses')
def jresourses():
    return render_template('Teacher/teacher-resourses.html')

@app.route('/teacher-settings')
def jsettings():
    return render_template('Teacher/teacher-settings.html')

@app.route('/teacher-support')
def jsupport():
    return render_template('Teacher/teacher-support.html')

@app.route('/teacher-schedule')
def jschedule():
    return render_template('Teacher/teacher-schedule.html')

@app.route('/teacher-live')
def jlive():
    return render_template('Teacher/teacher-live.html')

@app.route('/teacher-profile')
def jprofile():
    """The logged-in user's own profile page."""
    if 'user_id' not in session:
        return redirect(url_for('login'))

    ctx = build_profile_context(session['user_id'])
    if ctx is None:
        # Session points at a user_id that no longer exists in the DB
        session.clear()
        return redirect(url_for('login'))

    return render_template('Teacher/teacher-profile.html', **ctx)


@app.route('/parent-dashboard')
def parent_dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Only parents belong here; everyone else goes to their own page.
    if session.get('role') != 'parent':
        return redirect(url_for(home_endpoint_for_role(session.get('role'))))

    return render_template(
        'Parent/parent-dashboard.html',
        firstname=session['firstname'],
        lastname=session['lastname']
    )
    
@app.route('/profile/<int:user_id>')
def view_profile(user_id):
    """Anyone else's profile page — this is what the Follow button and
    live followers/following counts are actually for."""
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Viewing your own id through this route just sends you to the
    # canonical /profile instead of duplicating the same page.
    if user_id == session['user_id']:
        return redirect(url_for('profile'))

    ctx = build_profile_context(user_id)
    if ctx is None:
        abort(404)

    return render_template('Teacher/teacher-profile.html', **ctx)

# learner routes //////////////////////

@app.route('/admin_messages')
def admin_messages():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    if session.get('role') != 'admin':
        return redirect(url_for('dashboard'))
    return render_template('admin_messages.html')

@app.route('/admin_resources')
def admin_resources():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    if session.get('role') != 'admin':
        return redirect(url_for('dashboard'))
    return render_template('admin_resources.html')

@app.route('/admin_support')
def admin_support():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    if session.get('role') != 'admin':
        return redirect(url_for('dashboard'))
    return render_template('admin_support.html')

@app.route('/intro')
def intro():
    return render_template('Home/intro.html')

@app.route('/')
def learn():
    return render_template('Home/learn.html')

@app.route('/Login', methods=['GET', 'POST'])
def login():
    # Support a message passed either from the POST form-handling below,
    # or via a redirect query string (e.g. redirect(url_for('login',
    # message='...')) from the Google OAuth callback on failure).
    message = request.args.get('message', '')

    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute("""
            SELECT id, firstname, lastname, email, role, country
            FROM users 
            WHERE email = ? AND password = ?
        """, (email, password))

        user = cursor.fetchone()
        conn.close()

        if user:
            # Save user info in session
            session['user_id'] = user[0]
            session['firstname'] = user[1]
            session['lastname'] = user[2]
            session['email'] = user[3]
            session['role'] = user[4] or 'student'
            session['country'] = user[5]
            
            # Store a quote for this user session
            quote = get_random_quote()
            session['quote_text'] = quote['text']
            session['quote_author'] = quote['author']

            # Admins land on the admin dashboard, everyone else on the regular student dashboard
                        # Each role lands on its own page: admin, teacher or learner
            return redirect(url_for(home_endpoint_for_role(session['role'])))
        else:
            message = "Invalid email or password."

    return render_template('Home/Login.html', message=message)


# ============ GOOGLE OAUTH ROUTES ============

@app.route('/login/google')
def google_login():
    """Kicks off the Google OAuth flow. This is what the 'Continue with
    Google' button on Login.html links to via url_for('google_login')."""
    redirect_uri = url_for('google_callback', _external=True)
    return google.authorize_redirect(redirect_uri)


@app.route('/login/google/callback')
def google_callback():
    """Google redirects back here after the user approves access. We
    exchange the auth code for a token, pull the user's email/name out
    of it, and either log them into their existing account (matched by
    email) or create a new one on the fly."""
    try:
        token = google.authorize_access_token()
    except Exception as e:
        print(f"Google OAuth error: {str(e)}")
        return redirect(url_for('login', message='Google sign-in failed. Please try again.'))

    userinfo = token.get('userinfo')
    if not userinfo:
        try:
            userinfo = google.parse_id_token(token, nonce=None)
        except Exception:
            userinfo = None

    if not userinfo or not userinfo.get('email'):
        return redirect(url_for('login', message='Google sign-in failed. Please try again.'))

    email = userinfo.get('email')
    firstname = userinfo.get('given_name', '') or ''
    lastname = userinfo.get('family_name', '') or ''

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute("SELECT id, firstname, lastname, email, role, country FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()

    if not user:
        # First time signing in with this Google account — create an
        # account for them. password stays NULL so this account can
        # never be logged into via the normal email/password form.
        cursor.execute('''
            INSERT INTO users (firstname, lastname, email, password, role)
            VALUES (?, ?, ?, NULL, ?)
        ''', (firstname, lastname, email, 'student'))
        conn.commit()
        user_id = cursor.lastrowid
        user = (user_id, firstname, lastname, email, 'student', None)

    conn.close()

    session['user_id'] = user[0]
    session['firstname'] = user[1]
    session['lastname'] = user[2]
    session['email'] = user[3]
    session['role'] = user[4] or 'student'
    session['country'] = user[5]

    quote = get_random_quote()
    session['quote_text'] = quote['text']
    session['quote_author'] = quote['author']

    return redirect(url_for(home_endpoint_for_role(session['role'])))

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    if session.get('role') == 'teacher':
        return redirect(url_for('teacher_dashboard'))
    
    if 'quote_text' not in session:
        quote = get_random_quote()
        session['quote_text'] = quote['text']
        session['quote_author'] = quote['author']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    followers_count, following_count = get_follow_counts_for_user(cursor, session['user_id'])
    conn.close()

    return render_template(
        'Learner/dashboard.html',
        firstname=session['firstname'],
        lastname=session['lastname'],
        quote_text=session.get('quote_text'),
        quote_author=session.get('quote_author'),
        followers_count=followers_count,
        following_count=following_count
    )

@app.route('/admin-dashboard')
def admin_dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    if session.get('role') != 'admin':
        return redirect(url_for('dashboard'))

    if 'quote_text' not in session:
        quote = get_random_quote()
        session['quote_text'] = quote['text']
        session['quote_author'] = quote['author']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM users")
    total_users = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM users WHERE role = 'admin'")
    total_admins = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM resources")
    total_resources = cursor.fetchone()[0]

    cursor.execute("""
        SELECT id, firstname, lastname, email, role
        FROM users
        ORDER BY id DESC
        LIMIT 10
    """)
    recent_users = cursor.fetchall()

    conn.close()

    return render_template(
        'admin_dashboard.html',
        firstname=session['firstname'],
        lastname=session['lastname'],
        quote_text=session.get('quote_text'),
        quote_author=session.get('quote_author'),
        total_users=total_users,
        total_admins=total_admins,
        total_resources=total_resources,
        recent_users=recent_users
    )

@app.route('/career')
def career():
    return render_template('Home/career.html')

@app.route('/earn')
def earn():
    return render_template('Home/earn.html')

@app.route('/aboutus')
def aboutus():
    return render_template('Home/aboutus.html')

@app.route('/services')
def services():
    return render_template('Home/services.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """GET renders the contact page (unchanged). POST is the new AJAX
    endpoint contact.html's form submits to — it emails the message
    straight to CONTACT_RECEIVER_EMAIL and never touches the database."""
    if request.method == 'GET':
        return render_template('Home/contact.html')

    data = request.get_json(silent=True) or {}

    full_name = (data.get('fullName') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    subject = (data.get('subject') or '').strip()
    country = (data.get('country') or '').strip()
    message_body = (data.get('message') or '').strip()

    if not full_name or not email or not subject or not message_body:
        return jsonify({'success': False, 'message': 'Please fill in all required fields'}), 400

    if not app.config['MAIL_USERNAME'] or not app.config['MAIL_PASSWORD']:
        print("Contact form error: MAIL_USERNAME / MAIL_PASSWORD are not set")
        return jsonify({'success': False, 'message': 'Email is not configured on the server'}), 500

    try:
        msg = Message(
            subject=f"New contact form message: {subject}",
            recipients=[CONTACT_RECEIVER_EMAIL],
            reply_to=email,
            body=(
                f"From: {full_name} <{email}>\n"
                f"Phone: {phone or 'N/A'}\n"
                f"Country: {country or 'N/A'}\n\n"
                f"{message_body}"
            )
        )
        mail.send(msg)
    except Exception as e:
        print(f"Contact form email error: {str(e)}")
        return jsonify({'success': False, 'message': 'Failed to send message. Please try again later.'}), 500

    return jsonify({'success': True, 'message': 'Message sent successfully'})

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        password = request.form['password']
        country = request.form.get('country')

        chosen_role = (request.form.get('role') or '').strip().lower()
        if chosen_role == 'teacher':
            role = 'teacher'
        elif chosen_role == 'parent':
            role = 'parent'
        else:
            role = 'student'      # learner (and anything unexpected)

        conn = sqlite3.connect('users.db', timeout=10)
        try:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO users (firstname, lastname, email, password, role, country)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (firstname, lastname, email, password, role, country))
            conn.commit()
        except sqlite3.IntegrityError:
            conn.rollback()
            return render_template(
                'register.html',
                message='An account with this email already exists. Please log in or use a different email.'
            )
        finally:
            conn.close()

        return render_template('Home/Login.html')

    return render_template('Home/register.html')

@app.context_processor
def inject_user():
    avatar_url = None
    if 'user_id' in session:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute('SELECT avatar_filename FROM users WHERE id = ?', (session['user_id'],))
        row = cursor.fetchone()
        conn.close()
        if row and row[0]:
            avatar_url = get_avatar_url(session['user_id'], row[0])

    return dict(
        firstname=session.get('firstname'),
        lastname=session.get('lastname'),
        user_id=session.get('user_id'),
        role=session.get('role'),
        country=session.get('country'),
        avatar_url=avatar_url,
        quote_text=session.get('quote_text'),
        quote_author=session.get('quote_author')
    )

@app.route('/body')
def body():
    return render_template('Learner/body.html')

@app.route('/courses')
def courses():
    return render_template('Learner/courses.html')

@app.route('/schedule')
def schedule():
    return render_template('Learner/schedule.html')

@app.route('/careerD')
def careerD():
    return render_template('Learner/careerD.html')

@app.route('/progres')
def progres():
    return render_template('Learner/progres.html')

@app.route('/settings')
def settings():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    return render_template('Learner/settings.html')

@app.route('/strategies')
def strategies():
    return render_template('Learner/strategies.html')

@app.route('/live')
def live():
    return render_template('Learner/live.html')

@app.route('/messages')
def messages():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return render_template('Learner/messages.html')

@app.route('/support')
def support():
    return render_template('Learner/support.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

# ============ MESSAGING: USER SEARCH ============

@app.route('/messages/search_users', methods=['GET'])
def search_users():
    """Search existing accounts by name for the messages page."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    q = request.args.get('q', '').strip()
    if not q:
        return jsonify([])

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    like_term = f'%{q}%'
    cursor.execute('''
        SELECT id, firstname, lastname, avatar_filename
        FROM users
        WHERE id != ?
          AND (
              firstname LIKE ?
              OR lastname LIKE ?
              OR (firstname || ' ' || lastname) LIKE ?
          )
        ORDER BY firstname, lastname
        LIMIT 20
    ''', (session['user_id'], like_term, like_term, like_term))

    rows = cursor.fetchall()
    conn.close()

    results = []
    for row in rows:
        user_id, firstname, lastname, avatar_filename = row
        firstname = (firstname or '').strip()
        lastname = (lastname or '').strip()
        full_name = f"{firstname} {lastname}".strip()

        if not full_name:
            continue

        initial = (firstname[:1] or lastname[:1]).upper()

        results.append({
            'id': user_id,
            'name': full_name,
            'avatar': initial,
            # The account's real uploaded profile picture, if they have
            # one — the messages.html frontend shows this instead of the
            # initials badge whenever it's present.
            'avatar_url': get_avatar_url(user_id, avatar_filename),
            'online': False,
            'lastSeen': ''
        })

    return jsonify(results)


@app.route('/messages/send', methods=['POST'])
def send_message():
    """Send a message to a specific user or broadcast to all users."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    data = request.get_json(silent=True) or {}
    receiver_id = data.get('receiver_id')
    text = (data.get('text') or '').strip()
    is_broadcast = data.get('is_broadcast', False)

    if not text:
        return jsonify({'success': False, 'message': 'Text is required'}), 400

    sender_id = session['user_id']
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    if is_broadcast:
        # Check if user is admin
        cursor.execute('SELECT role FROM users WHERE id = ?', (sender_id,))
        user = cursor.fetchone()
        if not user or user[0] != 'admin':
            conn.close()
            return jsonify({'success': False, 'message': 'Only admins can broadcast'}), 403

        # Send to all users except the sender
        cursor.execute('SELECT id FROM users WHERE id != ?', (sender_id,))
        all_users = cursor.fetchall()
        
        if not all_users:
            conn.close()
            return jsonify({'success': False, 'message': 'No other users to send to'}), 404
        
        broadcast_count = 0
        for user_row in all_users:
            recipient_id = user_row[0]

            cursor.execute('''
                INSERT INTO messages (sender_id, receiver_id, text, is_read, is_broadcast)
                VALUES (?, ?, ?, 0, 1)
            ''', (sender_id, recipient_id, text))

            # Every broadcast recipient also gets a bell notification
            create_notification(
                conn,
                user_id=recipient_id,
                title='New announcement',
                message=text[:120],
                icon='fa-bullhorn',
                color='blue'
            )

            broadcast_count += 1
        
        conn.commit()
        conn.close()
        
        return jsonify({
            'success': True, 
            'message': f'Broadcast sent to {broadcast_count} users',
            'broadcast_count': broadcast_count
        })

    else:
        # Send to a specific user
        if not receiver_id:
            conn.close()
            return jsonify({'success': False, 'message': 'receiver_id is required'}), 400

        cursor.execute('SELECT id FROM users WHERE id = ?', (receiver_id,))
        if not cursor.fetchone():
            conn.close()
            return jsonify({'success': False, 'message': 'Recipient not found'}), 404

        cursor.execute('''
            INSERT INTO messages (sender_id, receiver_id, text, is_read, is_broadcast)
            VALUES (?, ?, ?, 0, 0)
        ''', (sender_id, receiver_id, text))

        # Direct messages also notify the recipient
        cursor.execute('SELECT firstname, lastname FROM users WHERE id = ?', (sender_id,))
        sender_row = cursor.fetchone()
        sender_name = f"{sender_row[0]} {sender_row[1]}".strip() if sender_row else 'Someone'

        create_notification(
            conn,
            user_id=receiver_id,
            title=f'New message from {sender_name}',
            message=text[:120],
            icon='fa-envelope',
            color='green'
        )

        conn.commit()

        message_id = cursor.lastrowid
        cursor.execute('SELECT id, sender_id, receiver_id, text, timestamp, is_read, is_broadcast FROM messages WHERE id = ?', (message_id,))
        row = cursor.fetchone()
        conn.close()

        message = {
            'id': row[0],
            'sender_id': row[1],
            'receiver_id': row[2],
            'text': row[3],
            'timestamp': to_iso_utc(row[4]),
            'read': bool(row[5]),
            'is_broadcast': bool(row[6])
        }

        return jsonify({'success': True, 'message': message})


@app.route('/messages/conversation/<int:other_user_id>', methods=['GET'])
def get_conversation(other_user_id):
    """Return the full message thread between the logged-in user and another specific user."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    my_id = session['user_id']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('''
        SELECT id, sender_id, receiver_id, text, timestamp, is_read, is_broadcast
        FROM messages
        WHERE (sender_id = ? AND receiver_id = ?)
           OR (sender_id = ? AND receiver_id = ?)
        ORDER BY timestamp ASC, id ASC
    ''', (my_id, other_user_id, other_user_id, my_id))

    rows = cursor.fetchall()

    # Mark messages from the other user as read
    cursor.execute('''
        UPDATE messages SET is_read = 1
        WHERE sender_id = ? AND receiver_id = ? AND is_read = 0
    ''', (other_user_id, my_id))
    conn.commit()
    conn.close()

    thread = [{
        'id': row[0],
        'sender_id': row[1],
        'receiver_id': row[2],
        'text': row[3],
        'timestamp': to_iso_utc(row[4]),
        'read': bool(row[5]),
        'is_broadcast': bool(row[6])
    } for row in rows]

    return jsonify(thread)


@app.route('/messages/conversations', methods=['GET'])
def list_conversations():
    """Return every account the logged-in user has exchanged messages with."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    my_id = session['user_id']
    is_admin = session.get('role') == 'admin'

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Get all users the user has messaged with
    cursor.execute('''
        SELECT DISTINCT other_id FROM (
            SELECT receiver_id AS other_id FROM messages WHERE sender_id = ?
            UNION
            SELECT sender_id AS other_id FROM messages WHERE receiver_id = ?
        )
    ''', (my_id, my_id))
    other_ids = [row[0] for row in cursor.fetchall()]

    conversations = []
    
    # If admin, add a special broadcast conversation entry
    if is_admin:
        # Count how many broadcast messages the admin has sent
        cursor.execute('''
            SELECT COUNT(*) FROM messages 
            WHERE sender_id = ? AND is_broadcast = 1
        ''', (my_id,))
        broadcast_count = cursor.fetchone()[0]
        
        if broadcast_count > 0:
            # Get the latest broadcast message
            cursor.execute('''
                SELECT text, timestamp FROM messages 
                WHERE sender_id = ? AND is_broadcast = 1
                ORDER BY timestamp DESC LIMIT 1
            ''', (my_id,))
            last_broadcast = cursor.fetchone()
            
            conversations.append({
                'id': -1,  # Special ID for broadcast
                'name': '📢 All Users (Broadcast)',
                'avatar': '📢',
                'avatar_url': None,
                'online': False,
                'lastSeen': '',
                'lastMessage': f'Broadcast: {last_broadcast[0][:50]}...' if last_broadcast else 'Send broadcast to all users',
                'lastTimestamp': to_iso_utc(last_broadcast[1]) if last_broadcast else None,
                'unread': 0,
                'is_broadcast': True
            })

    for other_id in other_ids:
        cursor.execute('SELECT firstname, lastname, avatar_filename FROM users WHERE id = ?', (other_id,))
        user_row = cursor.fetchone()
        if not user_row:
            continue

        firstname = (user_row[0] or '').strip()
        lastname = (user_row[1] or '').strip()
        avatar_filename = user_row[2]
        full_name = f"{firstname} {lastname}".strip()
        if not full_name:
            continue
        initial = (firstname[:1] or lastname[:1]).upper()

        cursor.execute('''
            SELECT sender_id, text, timestamp
            FROM messages
            WHERE (sender_id = ? AND receiver_id = ?)
               OR (sender_id = ? AND receiver_id = ?)
            ORDER BY timestamp DESC, id DESC
            LIMIT 1
        ''', (my_id, other_id, other_id, my_id))
        last_row = cursor.fetchone()

        last_message = None
        last_timestamp = None
        if last_row:
            prefix = 'You: ' if last_row[0] == my_id else ''
            last_message = f"{prefix}{last_row[1]}"
            last_timestamp = last_row[2]

        cursor.execute('''
            SELECT COUNT(*) FROM messages
            WHERE sender_id = ? AND receiver_id = ? AND is_read = 0
        ''', (other_id, my_id))
        unread = cursor.fetchone()[0]

        conversations.append({
            'id': other_id,
            'name': full_name,
            'avatar': initial,
            # The account's real uploaded profile picture, if they have
            # one — the messages.html frontend shows this instead of the
            # initials badge whenever it's present.
            'avatar_url': get_avatar_url(other_id, avatar_filename),
            'online': False,
            'lastSeen': '',
            'lastMessage': last_message,
            'lastTimestamp': last_timestamp,
            'unread': unread,
            'is_broadcast': False
        })

    conn.close()

    # Sort by most recent first
    conversations.sort(key=lambda c: c['lastTimestamp'] or '', reverse=True)

    for c in conversations:
        c['lastTimestamp'] = to_iso_utc(c['lastTimestamp'])

    return jsonify(conversations)

# ============ NOTIFICATIONS ============

@app.route('/notifications', methods=['GET'])
def get_notifications():
    """Return the logged-in user's notifications, newest first."""
    if 'user_id' not in session:
        return jsonify([])

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        SELECT id, title, message, icon, color, is_read, created_at
        FROM notifications
        WHERE user_id = ?
        ORDER BY created_at DESC, id DESC
        LIMIT 50
    ''', (session['user_id'],))
    rows = cursor.fetchall()
    conn.close()

    notifications = [{
        'id': row[0],
        'title': row[1],
        'message': row[2],
        'icon': row[3],
        'color': row[4],
        'read': bool(row[5]),
        'time': to_iso_utc(row[6])
    } for row in rows]

    return jsonify(notifications)


@app.route('/notifications/<int:notification_id>/read', methods=['POST'])
def mark_notification_read(notification_id):
    """Mark a single notification as read. Scoped to the logged-in user
    so nobody can mark someone else's notification by guessing an id."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE notifications SET is_read = 1
        WHERE id = ? AND user_id = ?
    ''', (notification_id, session['user_id']))
    conn.commit()
    updated = cursor.rowcount
    conn.close()

    if updated == 0:
        return jsonify({'success': False, 'message': 'Notification not found'}), 404

    return jsonify({'success': True})


@app.route('/notifications/read-all', methods=['POST'])
def mark_all_notifications_read():
    """Mark every unread notification belonging to the logged-in user as read."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE notifications SET is_read = 1
        WHERE user_id = ? AND is_read = 0
    ''', (session['user_id'],))
    conn.commit()
    conn.close()

    return jsonify({'success': True})

# ============ SUPPORT TICKETS / COMPLAINTS ============

def _serialize_complaint(row):
    """row layout: id, user_id, subject, description, category, priority, status,
    is_read, response, response_date, created_at, firstname, lastname, email"""
    firstname = (row[11] or '').strip()
    lastname = (row[12] or '').strip()
    full_name = f"{firstname} {lastname}".strip() or 'Unknown User'

    return {
        'id': row[0],
        'user_id': row[1],
        'subject': row[2],
        'description': row[3],
        'category': row[4],
        'priority': row[5],
        'status': row[6],
        'is_read': bool(row[7]),
        'response': row[8],
        'response_date': to_iso_utc(row[9]),
        'created_at': to_iso_utc(row[10]),
        'user_name': full_name,
        'user_email': row[13]
    }


# The admin panel's filter dropdown uses one category set (technical, academic,
# billing, content, account, other) and the student-facing ticket form uses a
# slightly different one (technical, account, course, billing, feature, other).
# Accept the union so neither page's submissions get silently downgraded to "other".
VALID_COMPLAINT_CATEGORIES = {
    'technical', 'academic', 'billing', 'content', 'account', 'other', 'course', 'feature'
}
VALID_COMPLAINT_PRIORITIES = {'low', 'medium', 'high', 'urgent'}


@app.route('/api/complaints', methods=['GET', 'POST'])
def complaints():
    """GET: admin fetches every ticket. POST: a logged-in user submits a new one."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    if request.method == 'POST':
        data = request.get_json(silent=True) or {}
        subject = (data.get('subject') or '').strip()
        description = (data.get('description') or '').strip()
        category = (data.get('category') or 'other').strip().lower()
        priority = (data.get('priority') or 'medium').strip().lower()

        if category not in VALID_COMPLAINT_CATEGORIES:
            category = 'other'
        if priority not in VALID_COMPLAINT_PRIORITIES:
            priority = 'medium'

        if not subject:
            conn.close()
            return jsonify({'success': False, 'message': 'Subject is required'}), 400

        cursor.execute('''
            INSERT INTO complaints (user_id, subject, description, category, priority, status, is_read)
            VALUES (?, ?, ?, ?, ?, 'pending', 0)
        ''', (session['user_id'], subject, description, category, priority))
        conn.commit()

        complaint_id = cursor.lastrowid
        cursor.execute('''
            SELECT c.id, c.user_id, c.subject, c.description, c.category, c.priority, c.status,
                   c.is_read, c.response, c.response_date, c.created_at,
                   u.firstname, u.lastname, u.email
            FROM complaints c
            LEFT JOIN users u ON c.user_id = u.id
            WHERE c.id = ?
        ''', (complaint_id,))
        row = cursor.fetchone()
        conn.close()

        return jsonify({'success': True, 'complaint': _serialize_complaint(row)})

    # GET — admin only
    if not is_admin():
        conn.close()
        return jsonify({'success': False, 'message': 'Admin access required'}), 403

    cursor.execute('''
        SELECT c.id, c.user_id, c.subject, c.description, c.category, c.priority, c.status,
               c.is_read, c.response, c.response_date, c.created_at,
               u.firstname, u.lastname, u.email
        FROM complaints c
        LEFT JOIN users u ON c.user_id = u.id
        ORDER BY c.created_at DESC, c.id DESC
    ''')
    rows = cursor.fetchall()
    conn.close()

    return jsonify({
        'success': True,
        'complaints': [_serialize_complaint(row) for row in rows]
    })


@app.route('/api/complaints/<int:complaint_id>/read', methods=['POST'])
def mark_complaint_read(complaint_id):
    """Admin opens a ticket — mark it as read."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    if not is_admin():
        return jsonify({'success': False, 'message': 'Admin access required'}), 403

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('UPDATE complaints SET is_read = 1 WHERE id = ?', (complaint_id,))
    conn.commit()
    updated = cursor.rowcount
    conn.close()

    if updated == 0:
        return jsonify({'success': False, 'message': 'Ticket not found'}), 404

    return jsonify({'success': True})


@app.route('/api/complaints/<int:complaint_id>/respond', methods=['POST'])
def respond_to_complaint(complaint_id):
    """Admin writes a response. Ticket moves to in-progress and the user gets notified."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    if not is_admin():
        return jsonify({'success': False, 'message': 'Admin access required'}), 403

    data = request.get_json(silent=True) or {}
    response_text = (data.get('response') or '').strip()
    if not response_text:
        return jsonify({'success': False, 'message': 'Response text is required'}), 400

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT user_id, subject, status FROM complaints WHERE id = ?', (complaint_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return jsonify({'success': False, 'message': 'Ticket not found'}), 404

    ticket_user_id, subject, current_status = row
    new_status = 'resolved' if current_status == 'resolved' else 'in-progress'

    cursor.execute('''
        UPDATE complaints
        SET response = ?, response_date = CURRENT_TIMESTAMP, status = ?, is_read = 1
        WHERE id = ?
    ''', (response_text, new_status, complaint_id))

    create_notification(
        conn,
        user_id=ticket_user_id,
        title=f'Support replied: {subject}'[:120],
        message=response_text[:120],
        icon='fa-headset',
        color='blue'
    )

    conn.commit()
    conn.close()

    return jsonify({'success': True, 'status': new_status})


@app.route('/api/complaints/<int:complaint_id>/resolve', methods=['POST'])
def resolve_complaint(complaint_id):
    """Admin marks a ticket resolved."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    if not is_admin():
        return jsonify({'success': False, 'message': 'Admin access required'}), 403

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT user_id, response, subject FROM complaints WHERE id = ?', (complaint_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return jsonify({'success': False, 'message': 'Ticket not found'}), 404

    ticket_user_id, existing_response, subject = row

    cursor.execute('''
        UPDATE complaints SET status = 'resolved', is_read = 1 WHERE id = ?
    ''', (complaint_id,))

    notification_message = existing_response if existing_response else 'Your ticket has been marked as resolved.'

    create_notification(
        conn,
        user_id=ticket_user_id,
        title=f'Resolved: {subject}'[:120],
        message=notification_message[:120],
        icon='fa-check-circle',
        color='green'
    )

    conn.commit()
    conn.close()

    return jsonify({'success': True})


@app.route('/api/complaints/mine', methods=['GET'])
def my_complaints():
    """A regular user viewing their own submitted tickets (for the student-facing support page)."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        SELECT c.id, c.user_id, c.subject, c.description, c.category, c.priority, c.status,
               c.is_read, c.response, c.response_date, c.created_at,
               u.firstname, u.lastname, u.email
        FROM complaints c
        LEFT JOIN users u ON c.user_id = u.id
        WHERE c.user_id = ?
        ORDER BY c.created_at DESC, c.id DESC
    ''', (session['user_id'],))
    rows = cursor.fetchall()
    conn.close()

    return jsonify({
        'success': True,
        'complaints': [_serialize_complaint(row) for row in rows]
    })

# ============ UPLOAD ROUTES ============

@app.route('/api/settings/upload-photo', methods=['POST'])
def upload_profile_photo():
    """Upload/replace the logged-in user's profile photo and persist it."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    if 'photo' not in request.files:
        return jsonify({'success': False, 'message': 'No file part'}), 400

    file = request.files['photo']
    if file.filename == '':
        return jsonify({'success': False, 'message': 'No selected file'}), 400

    image_exts = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
    ext = file.filename.rsplit('.', 1)[-1].lower() if '.' in file.filename else ''
    if ext not in image_exts:
        return jsonify({'success': False, 'message': 'Please upload a JPG, PNG, GIF, or WEBP image'}), 400

    user_id = session['user_id']
    user_dir = os.path.join(UPLOAD_FOLDER, 'avatars', str(user_id))
    os.makedirs(user_dir, exist_ok=True)

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT avatar_filename FROM users WHERE id = ?', (user_id,))
    row = cursor.fetchone()
    if row and row[0]:
        old_path = os.path.join(user_dir, row[0])
        if os.path.exists(old_path):
            os.remove(old_path)

    new_filename = f"{uuid.uuid4().hex}.{ext}"
    file.save(os.path.join(user_dir, new_filename))

    cursor.execute('UPDATE users SET avatar_filename = ? WHERE id = ?', (new_filename, user_id))
    conn.commit()
    conn.close()

    avatar_url = get_avatar_url(user_id, new_filename)
    return jsonify({'success': True, 'avatar_url': avatar_url})

@app.route('/api/upload', methods=['POST'])
def upload_file():
    """Handle single file upload"""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Not authenticated'}), 401
    
    try:
        if 'file' not in request.files:
            return jsonify({'success': False, 'message': 'No file part'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'success': False, 'message': 'No selected file'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'success': False, 'message': 'File type not allowed'}), 400
        
        title = request.form.get('title', file.filename)
        description = request.form.get('description', '')
        category = request.form.get('category', 'general')
        resource_type = request.form.get('resourceType', 'document')
        difficulty = request.form.get('difficulty', 'beginner')
        privacy = request.form.get('privacy', 'public')
        
        user_id = session['user_id']
        firstname = session['firstname']
        lastname = session['lastname']
        
        user_dir = os.path.join(UPLOAD_FOLDER, str(user_id))
        os.makedirs(user_dir, exist_ok=True)
        
        original_filename = secure_filename(file.filename)
        file_extension = original_filename.split('.')[-1].lower() if '.' in original_filename else ''
        unique_filename = f"{uuid.uuid4().hex}_{original_filename}"
        file_path = os.path.join(user_dir, unique_filename)
        
        file.save(file_path)
        
        file_size = os.path.getsize(file_path)
        file_category = get_file_category(original_filename)

        # ---- Thumbnail resolution ----
        # Priority order:
        #   1. An explicit "thumbnail" image sent alongside the upload
        #      (e.g. a poster frame picked for a video, or a cover image
        #      for a document) — upload.html sends this as a second file
        #      field named "thumbnail".
        #   2. If the uploaded file is itself an image, use the file's
        #      own served URL — no reason to show a stock photo instead
        #      of the actual picture that was uploaded.
        #   3. Otherwise, fall back to the generic category/course stock
        #      thumbnail exactly as before.
        thumbnail_url = None

        thumb_file = request.files.get('thumbnail')
        if thumb_file and thumb_file.filename:
            thumb_ext = thumb_file.filename.rsplit('.', 1)[-1].lower() if '.' in thumb_file.filename else ''
            if thumb_ext in THUMBNAIL_EXTENSIONS:
                thumb_original = secure_filename(thumb_file.filename)
                thumb_filename = f"{uuid.uuid4().hex}_thumb_{thumb_original}"
                thumb_path = os.path.join(user_dir, thumb_filename)
                thumb_file.save(thumb_path)
                thumbnail_url = url_for('serve_file', user_id=str(user_id), filename=thumb_filename)
            # An invalid thumbnail extension is silently ignored rather than
            # failing the whole upload — it just falls through to the next
            # thumbnail option below.

        if not thumbnail_url and file_category == 'image':
            thumbnail_url = url_for('serve_file', user_id=str(user_id), filename=unique_filename)

        if not thumbnail_url:
            thumbnail_url = get_thumbnail_url(file_category, category)

        duration = None
        if file_category == 'video':
            duration = '15:30'
        
        pages = 0
        if file_category in ['pdf', 'doc', 'presentation']:
            pages = 15
        
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO resources 
            (user_id, title, description, category, resource_type, file_name, file_path, 
             file_size, file_category, file_extension, privacy, difficulty, thumbnail_url,
             duration, pages)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            user_id, title, description, category, resource_type, unique_filename,
            file_path, file_size, file_category, file_extension, privacy, difficulty,
            thumbnail_url, duration, pages
        ))
        
        resource_id = cursor.lastrowid
        conn.commit()
        
        cursor.execute('''
            SELECT r.*, u.firstname, u.lastname, u.avatar_filename
            FROM resources r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.id = ?
        ''', (resource_id,))
        
        resource_row = cursor.fetchone()

        uploader_followers_count = 0
        if resource_row:
            uploader_followers_count, _ = get_follow_counts_for_user(cursor, resource_row[1])

        conn.close()
        
        if resource_row:
            resource = serialize_resource(
                resource_row,
                liked_by_current_user=False,
                uploader_followers_count=uploader_followers_count
            )

            return jsonify({
                'success': True,
                'message': 'File uploaded successfully',
                'resource': resource
            })
        else:
            return jsonify({'success': False, 'message': 'Failed to save resource to database'}), 500
            
    except Exception as e:
        print(f"Upload error: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/uploads/<user_id>/<filename>')
def serve_file(user_id, filename):
    """Serve uploaded files"""
    try:
        file_path = os.path.join(UPLOAD_FOLDER, user_id, filename)
        
        if not os.path.exists(file_path):
            return jsonify({'success': False, 'message': 'File not found'}), 404
        
        file_size = os.path.getsize(file_path)
        file_ext = filename.lower().split('.')[-1] if '.' in filename else ''
        
        video_exts = ['mp4', 'avi', 'mov', 'mkv', 'webm', 'm4v', 'mpg', 'mpeg', 'wmv', 'flv']
        audio_exts = ['mp3', 'wav', 'aac', 'flac', 'm4a', 'wma', 'ogg']
        image_exts = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg', 'tiff', 'ico']
        inline_exts = ['pdf', 'txt', 'md', 'json', 'xml', 'csv', 'html', 'css', 'js']
        
        mime_types = {
            'mp4': 'video/mp4',
            'webm': 'video/webm',
            'ogg': 'video/ogg',
            'mov': 'video/quicktime',
            'avi': 'video/x-msvideo',
            'mkv': 'video/x-matroska',
            'wmv': 'video/x-ms-wmv',
            'flv': 'video/x-flv',
            'm4v': 'video/x-m4v',
            'mpg': 'video/mpeg',
            'mpeg': 'video/mpeg',
            'mp3': 'audio/mpeg',
            'wav': 'audio/wav',
            'flac': 'audio/flac',
            'aac': 'audio/aac',
            'm4a': 'audio/mp4',
            'wma': 'audio/x-ms-wma',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'bmp': 'image/bmp',
            'webp': 'image/webp',
            'svg': 'image/svg+xml',
            'tiff': 'image/tiff',
            'ico': 'image/x-icon',
            'pdf': 'application/pdf',
            'doc': 'application/msword',
            'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'txt': 'text/plain',
            'rtf': 'application/rtf',
            'odt': 'application/vnd.oasis.opendocument.text',
            'xls': 'application/vnd.ms-excel',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'csv': 'text/csv',
            'ods': 'application/vnd.oasis.opendocument.spreadsheet',
            'ppt': 'application/vnd.ms-powerpoint',
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'odp': 'application/vnd.oasis.opendocument.presentation',
            'zip': 'application/zip',
            'rar': 'application/x-rar-compressed',
            '7z': 'application/x-7z-compressed',
            'tar': 'application/x-tar',
            'gz': 'application/gzip',
            'js': 'application/javascript',
            'html': 'text/html',
            'css': 'text/css',
            'py': 'text/x-python',
            'java': 'text/x-java-source',
            'c': 'text/x-c',
            'cpp': 'text/x-c++',
            'php': 'text/x-php',
            'sql': 'application/sql',
            'json': 'application/json',
            'xml': 'application/xml',
            'yml': 'text/yaml',
            'yaml': 'text/yaml',
            'md': 'text/markdown'
        }
        
        mime_type = mime_types.get(file_ext, 'application/octet-stream')
        is_video = file_ext in video_exts
        is_audio = file_ext in audio_exts
        is_image = file_ext in image_exts
        is_media = is_video or is_audio
        
        range_header = request.headers.get('Range')
        
        if is_media and range_header:
            range_header = range_header.strip().replace('bytes=', '')
            byte_ranges = range_header.split('-')
            
            start_byte = 0
            end_byte = file_size - 1
            
            if byte_ranges[0]:
                start_byte = int(byte_ranges[0])
            if byte_ranges[1]:
                end_byte = int(byte_ranges[1])
            else:
                end_byte = file_size - 1
            
            if start_byte >= file_size:
                start_byte = 0
            if end_byte >= file_size:
                end_byte = file_size - 1
            if start_byte > end_byte:
                start_byte, end_byte = end_byte, start_byte
            
            length = end_byte - start_byte + 1
            
            def generate():
                with open(file_path, 'rb') as f:
                    f.seek(start_byte)
                    remaining = length
                    while remaining > 0:
                        chunk_size = min(4096, remaining)
                        chunk = f.read(chunk_size)
                        if not chunk:
                            break
                        yield chunk
                        remaining -= len(chunk)
            
            resp = Response(
                generate(),
                206,
                mimetype=mime_type,
                direct_passthrough=True
            )
            
            resp.headers.add('Content-Range', f'bytes {start_byte}-{end_byte}/{file_size}')
            resp.headers.add('Accept-Ranges', 'bytes')
            resp.headers.add('Content-Length', str(length))
            resp.headers.add('Cache-Control', 'no-cache')
            
            return resp
        
        if is_media:
            response = send_from_directory(
                os.path.join(UPLOAD_FOLDER, user_id),
                filename,
                mimetype=mime_type,
                as_attachment=False
            )
            response.headers.add('Accept-Ranges', 'bytes')
            response.headers.add('Cache-Control', 'public, max-age=31536000')
            return response
        
        if is_image:
            return send_from_directory(
                os.path.join(UPLOAD_FOLDER, user_id),
                filename,
                mimetype=mime_type
            )
        
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401
        
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute('''
            SELECT privacy, user_id FROM resources 
            WHERE file_name = ? 
            LIMIT 1
        ''', (filename,))
        
        file_info = cursor.fetchone()
        conn.close()
        
        if file_info:
            privacy, owner_id = file_info
            if privacy == 'public' or str(session['user_id']) == str(owner_id):
                force_download = file_ext not in inline_exts
                return send_from_directory(
                    os.path.join(UPLOAD_FOLDER, user_id),
                    filename,
                    as_attachment=force_download,
                    mimetype=mime_type
                )
        
        return jsonify({'success': False, 'message': 'Access denied'}), 403
        
    except Exception as e:
        print(f"Error serving file: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resources', methods=['GET'])
def get_resources():
    """Get all resources with filters"""
    try:
        category = request.args.get('category', '')
        search = request.args.get('search', '')
        sort_by = request.args.get('sort', 'newest')
        file_type = request.args.get('type', '')
        difficulty = request.args.get('difficulty', '').strip().lower()
        limit = int(request.args.get('limit', 50))
        offset = int(request.args.get('offset', 0))
        
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        query = '''
            SELECT r.*, u.firstname, u.lastname, u.avatar_filename
            FROM resources r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE 1=1
        '''
        params = []
        
        if category:
            query += ' AND r.category = ?'
            params.append(category)
        
        if file_type:
            if file_type == 'videos':
                query += ' AND r.file_category = "video"'
            elif file_type == 'documents':
                query += ' AND r.file_category IN ("pdf", "doc", "presentation", "spreadsheet", "code")'
            elif file_type == 'images':
                query += ' AND r.file_category = "image"'
            elif file_type == 'audio':
                query += ' AND r.file_category = "audio"'
            elif file_type == 'other':
                query += ' AND r.file_category = "other"'
        
        if search:
            query += ' AND (r.title LIKE ? OR r.description LIKE ?)'
            params.extend([f'%{search}%', f'%{search}%'])

        # "Grade" dropdown on the frontend filters by the existing
        # difficulty column (beginner/intermediate/advanced).
        if difficulty:
            query += ' AND LOWER(r.difficulty) = ?'
            params.append(difficulty)
        
        if sort_by == 'newest':
            query += ' ORDER BY r.upload_date DESC'
        elif sort_by == 'oldest':
            query += ' ORDER BY r.upload_date ASC'
        elif sort_by == 'popular':
            query += ' ORDER BY r.views DESC'
        elif sort_by == 'largest':
            query += ' ORDER BY r.file_size DESC'
        elif sort_by == 'smallest':
            query += ' ORDER BY r.file_size ASC'
        
        query += ' LIMIT ? OFFSET ?'
        params.extend([limit, offset])
        
        cursor.execute(query, params)
        resources_rows = cursor.fetchall()
        
        count_query = '''
            SELECT COUNT(*) FROM resources r WHERE 1=1
        '''
        count_params = []
        
        if category:
            count_query += ' AND r.category = ?'
            count_params.append(category)
        
        if search:
            count_query += ' AND (r.title LIKE ? OR r.description LIKE ?)'
            count_params.extend([f'%{search}%', f'%{search}%'])

        if difficulty:
            count_query += ' AND LOWER(r.difficulty) = ?'
            count_params.append(difficulty)
        
        cursor.execute(count_query, count_params)
        total_count = cursor.fetchone()[0]

        # Batch-fetch which of these resources the current user has liked,
        # which uploaders they already follow, and each uploader's live
        # follower count — so the grid can render filled hearts /
        # "Following" state / follower counts without N+1 queries.
        liked_ids = get_liked_resource_ids(cursor, session.get('user_id'))
        following_ids = get_following_ids(cursor, session.get('user_id'))
        follower_counts = get_follower_counts(cursor, (row[1] for row in resources_rows))

        conn.close()
        
        resources = [
            serialize_resource(
                row,
                liked_by_current_user=row[0] in liked_ids,
                following_uploader=row[1] in following_ids,
                uploader_followers_count=follower_counts.get(row[1], 0)
            )
            for row in resources_rows
        ]
        
        return jsonify({
            'success': True,
            'resources': resources,
            'total': total_count,
            'limit': limit,
            'offset': offset
        })
        
    except Exception as e:
        print(f"Error getting resources: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resources/<int:resource_id>', methods=['GET'])
def get_resource(resource_id):
    """Get a specific resource by ID.

    NOTE: this endpoint no longer bumps the view counter — that happens
    once, per-user, via POST /api/resources/<id>/view (see below), so
    opening the same resource repeatedly doesn't inflate views just
    because the details were re-fetched.
    """
    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT r.*, u.firstname, u.lastname, u.avatar_filename
            FROM resources r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.id = ?
        ''', (resource_id,))
        
        row = cursor.fetchone()

        if not row:
            conn.close()
            return jsonify({'success': False, 'message': 'Resource not found'}), 404

        liked = user_has_liked(cursor, resource_id, session.get('user_id'))
        following = user_is_following(cursor, session.get('user_id'), row[1])
        followers_count, _ = get_follow_counts_for_user(cursor, row[1])
        conn.close()

        resource = serialize_resource(
            row,
            liked_by_current_user=liked,
            following_uploader=following,
            uploader_followers_count=followers_count
        )
        
        return jsonify({
            'success': True,
            'resource': resource
        })
        
    except Exception as e:
        print(f"Error getting resource: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resources/user/<int:user_id>', methods=['GET'])
def get_user_resources(user_id):
    """Get resources for a specific user"""
    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT r.*, u.firstname, u.lastname, u.avatar_filename
            FROM resources r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.user_id = ?
            ORDER BY r.upload_date DESC
        ''', (user_id,))
        
        rows = cursor.fetchall()
        liked_ids = get_liked_resource_ids(cursor, session.get('user_id'))
        following_ids = get_following_ids(cursor, session.get('user_id'))
        follower_counts = get_follower_counts(cursor, (row[1] for row in rows))
        conn.close()
        
        resources = [
            serialize_resource(
                row,
                liked_by_current_user=row[0] in liked_ids,
                following_uploader=row[1] in following_ids,
                uploader_followers_count=follower_counts.get(row[1], 0)
            )
            for row in rows
        ]
        
        return jsonify({
            'success': True,
            'resources': resources,
            'total': len(resources)
        })
        
    except Exception as e:
        print(f"Error getting user resources: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resources/<int:resource_id>/download', methods=['GET'])
def download_resource(resource_id):
    """Download a resource file"""
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401
        
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT r.*, u.firstname, u.lastname 
            FROM resources r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.id = ?
        ''', (resource_id,))
        
        row = cursor.fetchone()
        
        if not row:
            conn.close()
            return jsonify({'success': False, 'message': 'Resource not found'}), 404
        
        cursor.execute('UPDATE resources SET downloads = downloads + 1 WHERE id = ?', (resource_id,))
        conn.commit()
        
        user_id = row[1]
        file_name = row[6]
        privacy = row[11]
        
        conn.close()
        
        if privacy != 'public' and str(session['user_id']) != str(user_id):
            return jsonify({'success': False, 'message': 'Access denied'}), 403
        
        file_dir = os.path.join(UPLOAD_FOLDER, str(user_id))
        file_path = os.path.join(file_dir, file_name)
        
        if not os.path.exists(file_path):
            return jsonify({'success': False, 'message': 'File not found on server'}), 404
        
        return send_from_directory(file_dir, file_name, as_attachment=True)
        
    except Exception as e:
        print(f"Error downloading resource: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resources/<int:resource_id>/like', methods=['POST', 'DELETE'])
def toggle_resource_like(resource_id):
    """
    POST   -> like the resource (idempotent: liking twice just stays liked)
    DELETE -> unlike the resource

    Whether the current user has already liked this resource is tracked
    in resource_likes, keyed by (resource_id, user_id) with a UNIQUE
    constraint — so a like can only ever be counted once per person,
    no matter how many times they tap the button.
    """
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        user_id = session['user_id']

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute('SELECT id FROM resources WHERE id = ?', (resource_id,))
        if not cursor.fetchone():
            conn.close()
            return jsonify({'success': False, 'message': 'Resource not found'}), 404

        if request.method == 'DELETE':
            cursor.execute('''
                DELETE FROM resource_likes WHERE resource_id = ? AND user_id = ?
            ''', (resource_id, user_id))
            if cursor.rowcount:
                cursor.execute('UPDATE resources SET likes = MAX(likes - 1, 0) WHERE id = ?', (resource_id,))
            conn.commit()
            liked = False
        else:
            try:
                cursor.execute('''
                    INSERT INTO resource_likes (resource_id, user_id)
                    VALUES (?, ?)
                ''', (resource_id, user_id))
                cursor.execute('UPDATE resources SET likes = likes + 1 WHERE id = ?', (resource_id,))
                conn.commit()
            except sqlite3.IntegrityError:
                conn.rollback()  # already liked by this user — no-op, stays liked
            liked = True

        cursor.execute('SELECT likes FROM resources WHERE id = ?', (resource_id,))
        likes_count = cursor.fetchone()[0]
        conn.close()

        return jsonify({
            'success': True,
            'liked': liked,
            'likes': likes_count,
            'likes_count': likes_count
        })

    except Exception as e:
        print(f"Error toggling like: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/api/resources/<int:resource_id>/view', methods=['POST'])
def track_resource_view(resource_id):
    """
    Count exactly one view per (resource, user), ever. First call for a
    given user increments the counter; every call after that for the
    same user is a no-op that just returns the current total.
    """
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        user_id = session['user_id']

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute('SELECT id FROM resources WHERE id = ?', (resource_id,))
        if not cursor.fetchone():
            conn.close()
            return jsonify({'success': False, 'message': 'Resource not found'}), 404

        counted = False
        try:
            cursor.execute('''
                INSERT INTO resource_views (resource_id, user_id)
                VALUES (?, ?)
            ''', (resource_id, user_id))
            cursor.execute('UPDATE resources SET views = views + 1 WHERE id = ?', (resource_id,))
            conn.commit()
            counted = True
        except sqlite3.IntegrityError:
            conn.rollback()  # this user already viewed it — don't double count

        cursor.execute('SELECT views FROM resources WHERE id = ?', (resource_id,))
        views_count = cursor.fetchone()[0]
        conn.close()

        return jsonify({
            'success': True,
            'counted': counted,
            'views': views_count,
            'views_count': views_count
        })

    except Exception as e:
        print(f"Error tracking view: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/api/strategies/likes', methods=['GET'])
def get_strategy_likes():
    """
    Batch endpoint the Learning Strategies Hub calls once on page load:
    hands back every strategy's current like count, plus (only if the
    person is logged in) which strategy ids they've personally liked —
    so likes render correctly from the database instead of localStorage,
    the same way they'd render on a different browser or device.
    """
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    counts = get_strategy_like_counts(cursor)
    liked_ids = list(get_liked_strategy_ids(cursor, session.get('user_id')))

    conn.close()

    return jsonify({
        'success': True,
        'counts': counts,
        'liked': liked_ids
    })


@app.route('/api/strategies/<int:strategy_id>/like', methods=['POST', 'DELETE'])
def toggle_strategy_like(strategy_id):
    """
    POST   -> like a learning strategy (idempotent: liking twice stays liked)
    DELETE -> unlike it

    Mirrors toggle_resource_like above: tracked in strategy_likes keyed
    by (strategy_id, user_id) with a UNIQUE constraint, so a like can
    only ever be counted once per person no matter how many times the
    heart button gets clicked.
    """
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        user_id = session['user_id']

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        if request.method == 'DELETE':
            cursor.execute('''
                DELETE FROM strategy_likes WHERE strategy_id = ? AND user_id = ?
            ''', (strategy_id, user_id))
            conn.commit()
            liked = False
        else:
            try:
                cursor.execute('''
                    INSERT INTO strategy_likes (strategy_id, user_id)
                    VALUES (?, ?)
                ''', (strategy_id, user_id))
                conn.commit()
            except sqlite3.IntegrityError:
                conn.rollback()  # already liked by this user — no-op, stays liked
            liked = True

        cursor.execute('SELECT COUNT(*) FROM strategy_likes WHERE strategy_id = ?', (strategy_id,))
        likes_count = cursor.fetchone()[0]
        conn.close()

        return jsonify({
            'success': True,
            'liked': liked,
            'likes': likes_count
        })

    except Exception as e:
        print(f"Error toggling strategy like: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500


# ============ COMMUNITY OPINIONS (Learning Strategies Hub) ============

@app.route('/api/opinions', methods=['GET', 'POST'])
def opinions_api():
    """
    GET: everyone's shared learning-strategy opinions, newest first,
    with each one's live like count and (if logged in) whether the
    current user has liked it.
    POST: a logged-in user posts a new opinion.
    """
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    if request.method == 'POST':
        if 'user_id' not in session:
            conn.close()
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        data = request.get_json(silent=True) or {}
        text = (data.get('text') or '').strip()
        tag = (data.get('tag') or 'general').strip().lower()

        valid_tags = {'reading', 'memorization', 'mastery', 'general'}
        if tag not in valid_tags:
            tag = 'general'

        if not text:
            conn.close()
            return jsonify({'success': False, 'message': 'Please share your opinion or strategy!'}), 400

        cursor.execute('''
            INSERT INTO opinions (user_id, text, tag)
            VALUES (?, ?, ?)
        ''', (session['user_id'], text, tag))
        conn.commit()

        opinion_id = cursor.lastrowid
        cursor.execute('''
            SELECT o.id, o.user_id, o.text, o.tag, o.created_at, u.firstname, u.lastname,
                   (SELECT COUNT(*) FROM opinion_likes ol WHERE ol.opinion_id = o.id) AS likes
            FROM opinions o
            LEFT JOIN users u ON o.user_id = u.id
            WHERE o.id = ?
        ''', (opinion_id,))
        row = cursor.fetchone()
        conn.close()

        return jsonify({
            'success': True,
            'opinion': serialize_opinion(row, liked_by_current_user=False)
        })

    # GET — anyone can read the shared list, logged in or not
    cursor.execute('''
        SELECT o.id, o.user_id, o.text, o.tag, o.created_at, u.firstname, u.lastname,
               (SELECT COUNT(*) FROM opinion_likes ol WHERE ol.opinion_id = o.id) AS likes
        FROM opinions o
        LEFT JOIN users u ON o.user_id = u.id
        ORDER BY o.created_at DESC, o.id DESC
    ''')
    rows = cursor.fetchall()
    liked_ids = get_liked_opinion_ids(cursor, session.get('user_id'))
    conn.close()

    return jsonify({
        'success': True,
        'opinions': [
            serialize_opinion(row, liked_by_current_user=row[0] in liked_ids)
            for row in rows
        ]
    })


@app.route('/api/opinions/<int:opinion_id>/like', methods=['POST', 'DELETE'])
def toggle_opinion_like(opinion_id):
    """
    POST   -> like an opinion (idempotent: liking twice stays liked)
    DELETE -> unlike it

    Same UNIQUE(opinion_id, user_id) pattern as resource_likes /
    strategy_likes above — a like can only ever be counted once per
    person, tied to their account rather than one browser's
    localStorage, so repeated clicks (or a different device) can't
    inflate the count.
    """
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        user_id = session['user_id']

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute('SELECT id FROM opinions WHERE id = ?', (opinion_id,))
        if not cursor.fetchone():
            conn.close()
            return jsonify({'success': False, 'message': 'Opinion not found'}), 404

        if request.method == 'DELETE':
            cursor.execute('''
                DELETE FROM opinion_likes WHERE opinion_id = ? AND user_id = ?
            ''', (opinion_id, user_id))
            conn.commit()
            liked = False
        else:
            try:
                cursor.execute('''
                    INSERT INTO opinion_likes (opinion_id, user_id)
                    VALUES (?, ?)
                ''', (opinion_id, user_id))
                conn.commit()
            except sqlite3.IntegrityError:
                conn.rollback()  # already liked by this user — no-op, stays liked
            liked = True

        cursor.execute('SELECT COUNT(*) FROM opinion_likes WHERE opinion_id = ?', (opinion_id,))
        likes_count = cursor.fetchone()[0]
        conn.close()

        return jsonify({
            'success': True,
            'liked': liked,
            'likes': likes_count
        })

    except Exception as e:
        print(f"Error toggling opinion like: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/api/users/suggestions', methods=['GET'])
def get_follow_suggestions():
    """A short list of other real users the logged-in user isn't already
    following yet, for the dashboard's 'People You May Know' card."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    my_id = session['user_id']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    following_ids = get_following_ids(cursor, my_id)
    exclude_ids = following_ids | {my_id}

    placeholders = ','.join('?' for _ in exclude_ids)
    cursor.execute(f'''
        SELECT id, firstname, lastname, avatar_filename, country
        FROM users
        WHERE id NOT IN ({placeholders})
        ORDER BY id DESC
        LIMIT 5
    ''', tuple(exclude_ids))

    rows = cursor.fetchall()
    conn.close()

    country_labels = {'KE': '🇰🇪 Kenya', 'US': '🇺🇸 United States'}

    suggestions = []
    for row in rows:
        user_id, firstname, lastname, avatar_filename, country = row
        firstname = (firstname or '').strip()
        lastname = (lastname or '').strip()
        full_name = f"{firstname} {lastname}".strip() or 'eSchool User'
        initials = (f"{firstname[:1]}{lastname[:1]}" or 'ES').upper()

        suggestions.append({
            'id': user_id,
            'name': full_name,
            'initials': initials,
            'avatar_url': get_avatar_url(user_id, avatar_filename),
            'country_label': country_labels.get(country, 'Learner')
        })

    return jsonify({'success': True, 'suggestions': suggestions})


@app.route('/api/users/<int:target_user_id>/follow', methods=['POST', 'DELETE'])
def toggle_follow(target_user_id):
    """
    POST   -> follow the given user (idempotent: following twice stays followed)
    DELETE -> unfollow

    Tracked in `follows`, keyed by (follower_id, following_id) with a
    UNIQUE constraint — so a follow can only ever be counted once per
    person, no matter how many times the button gets tapped.
    """
    try:
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401

        follower_id = session['user_id']

        if follower_id == target_user_id:
            return jsonify({'success': False, 'message': "You can't follow yourself"}), 400

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute('SELECT id FROM users WHERE id = ?', (target_user_id,))
        if not cursor.fetchone():
            conn.close()
            return jsonify({'success': False, 'message': 'User not found'}), 404

        if request.method == 'DELETE':
            cursor.execute('''
                DELETE FROM follows WHERE follower_id = ? AND following_id = ?
            ''', (follower_id, target_user_id))
            conn.commit()
            following = False
        else:
            try:
                cursor.execute('''
                    INSERT INTO follows (follower_id, following_id)
                    VALUES (?, ?)
                ''', (follower_id, target_user_id))
                conn.commit()
            except sqlite3.IntegrityError:
                conn.rollback()  # already following — no-op, stays followed
            following = True

        cursor.execute('SELECT COUNT(*) FROM follows WHERE following_id = ?', (target_user_id,))
        followers_count = cursor.fetchone()[0]

        # Also hand back the target's following_count and the current
        # user's own updated following_count, in case a page (like
        # profile.html) wants to refresh both stats from one response
        # without a second round-trip.
        cursor.execute('SELECT COUNT(*) FROM follows WHERE follower_id = ?', (target_user_id,))
        target_following_count = cursor.fetchone()[0]
        cursor.execute('SELECT COUNT(*) FROM follows WHERE follower_id = ?', (follower_id,))
        viewer_following_count = cursor.fetchone()[0]

        conn.close()

        return jsonify({
            'success': True,
            'following': following,
            'followers_count': followers_count,
            'target_following_count': target_following_count,
            'viewer_following_count': viewer_following_count
        })

    except Exception as e:
        print(f"Error toggling follow: {str(e)}")
        return jsonify({'success': False, 'message': str(e)}), 500

VALID_LIVE_SUBJECTS = {'math', 'english', 'kiswahili', 'csl'}


def parse_stream_url(url):
    """
    Works out the platform name and, for YouTube, the embed link from a
    pasted live URL. Returns (platform, embed_url).
    embed_url is '' when the platform can't be shown inside the page
    (Zoom, Google Meet, Teams): learners get an "Open Class Link" button.
    """
    p = urlparse(url)
    host = (p.netloc or '').lower()
    if host.startswith('www.'):
        host = host[4:]
    path = p.path or ''

    if host in ('youtube.com', 'm.youtube.com', 'youtu.be'):
        vid = None
        if host == 'youtu.be':
            vid = path.strip('/').split('/')[0]
        elif path.startswith('/watch'):
            vid = (parse_qs(p.query).get('v') or [None])[0]
        else:
            parts = path.strip('/').split('/')
            if len(parts) >= 2 and parts[0] in ('live', 'embed', 'shorts'):
                vid = parts[1]
        if vid and re.fullmatch(r'[A-Za-z0-9_-]{11}', vid):
            return 'YouTube Live', f'https://www.youtube.com/embed/{vid}'
        return 'YouTube Live', ''
    if host == 'meet.google.com':
        return 'Google Meet', ''
    if host.endswith('zoom.us') or host.endswith('zoom.com'):
        return 'Zoom', ''
    if host.endswith('teams.microsoft.com') or host.endswith('teams.live.com'):
        return 'Microsoft Teams', ''
    return (host or 'Online'), ''


def serialize_live_class(row):
    """
    row layout: 0 id, 1 teacher_id, 2 title, 3 subject, 4 grade, 5 description,
    6 topics (JSON), 7 start_time, 8 duration_min, 9 platform, 10 stream_url,
    11 embed_url, 12 firstname, 13 lastname
    """
    firstname = (row[12] or '').strip()
    lastname = (row[13] or '').strip()
    try:
        topics = json.loads(row[6] or '[]')
    except ValueError:
        topics = []
    return {
        'id': row[0],
        'teacher_id': row[1],
        'teacher': f"{firstname} {lastname}".strip() or 'Teacher',
        'title': row[2],
        'subject': row[3],
        'grade': row[4] or 'Grade 10',
        'description': row[5] or '',
        'topics': topics,
        'start': row[7],                 # UTC, like 2026-10-20T06:00:00Z
        'durationMin': row[8],
        'platform': row[9] or 'Online',
        'streamUrl': row[10],
        'embedUrl': row[11] or '',
        'viewers': 0,
        'is_mine': session.get('user_id') == row[1]
    }


LIVE_CLASS_SELECT = '''
    SELECT lc.id, lc.teacher_id, lc.title, lc.subject, lc.grade, lc.description,
           lc.topics, lc.start_time, lc.duration_min, lc.platform, lc.stream_url,
           lc.embed_url, u.firstname, u.lastname
    FROM live_classes lc
    LEFT JOIN users u ON lc.teacher_id = u.id
'''


@app.route('/api/live-classes', methods=['GET', 'POST'])
def live_classes_api():
    """
    GET  -> every live class (learners see these on the Live Classes page).
            Add ?mine=1 to get only the logged-in teacher's own classes.
    POST -> a teacher (or admin) creates a live class.
    """
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db', timeout=10)
    try:
        cursor = conn.cursor()

        if request.method == 'POST':
            if session.get('role') not in ('teacher', 'admin'):
                return jsonify({'success': False, 'message': 'Only teachers can create live classes'}), 403

            data = request.get_json(silent=True) or {}

            title = (data.get('title') or '').strip()[:120]
            subject = (data.get('subject') or '').strip().lower()
            grade = (data.get('grade') or 'Grade 10').strip()[:30]
            description = (data.get('description') or '').strip()[:600]
            url = (data.get('url') or '').strip()

            if not title:
                return jsonify({'success': False, 'message': 'Please enter a class title'}), 400
            if subject not in VALID_LIVE_SUBJECTS:
                return jsonify({'success': False, 'message': 'Please choose a valid subject'}), 400

            # The link must be a real http(s) address
            parsed = urlparse(url)
            if parsed.scheme not in ('http', 'https') or not parsed.netloc or len(url) > 500:
                return jsonify({'success': False, 'message': 'Please paste a valid live link starting with https://'}), 400

            # Topics: a list of up to 8 short lines
            raw_topics = data.get('topics') or []
            if isinstance(raw_topics, str):
                raw_topics = raw_topics.split('\n')
            topics = [str(t).strip()[:100] for t in raw_topics if str(t).strip()][:8]

            # Duration: 15 minutes to 8 hours
            try:
                duration = int(data.get('duration') or 60)
            except (TypeError, ValueError):
                duration = 60
            duration = max(15, min(duration, 480))

            # Start time: ISO string from the browser, stored as UTC
            try:
                start_raw = str(data.get('start') or '').replace('Z', '+00:00')
                start_dt = datetime.fromisoformat(start_raw)
                if start_dt.tzinfo is None:
                    start_dt = start_dt.replace(tzinfo=timezone.utc)
                start_dt = start_dt.astimezone(timezone.utc)
            except ValueError:
                return jsonify({'success': False, 'message': 'Please choose a valid date and start time'}), 400

            if start_dt + timedelta(minutes=duration) < datetime.now(timezone.utc):
                return jsonify({'success': False, 'message': 'That time has already passed'}), 400

            platform, embed_url = parse_stream_url(url)

            cursor.execute('''
                INSERT INTO live_classes
                (teacher_id, title, subject, grade, description, topics, start_time,
                 duration_min, platform, stream_url, embed_url)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                session['user_id'], title, subject, grade, description,
                json.dumps(topics), start_dt.strftime('%Y-%m-%dT%H:%M:%SZ'),
                duration, platform, url, embed_url
            ))
            conn.commit()

            cursor.execute(LIVE_CLASS_SELECT + ' WHERE lc.id = ?', (cursor.lastrowid,))
            row = cursor.fetchone()
            return jsonify({'success': True, 'live_class': serialize_live_class(row)})

        # ---- GET ----
        # Hide classes that ended more than a day ago
            if request.args.get('mine') == '1':
            # A teacher's own list keeps every class they created
             query = LIVE_CLASS_SELECT + ' WHERE lc.teacher_id = ?'
            params = [session['user_id']]
        else:
            # Learners only see classes that ended less than a day ago
            cutoff = (datetime.now(timezone.utc) - timedelta(days=1)).strftime('%Y-%m-%dT%H:%M:%SZ')
            query = LIVE_CLASS_SELECT + ' WHERE lc.start_time >= ?'
            params = [cutoff]
        query += ' ORDER BY lc.start_time ASC'

        cursor.execute(query, params)
        rows = cursor.fetchall()
        return jsonify({'success': True, 'live_classes': [serialize_live_class(r) for r in rows]})
    finally:
        conn.close()


@app.route('/api/live-classes/<int:live_id>', methods=['DELETE'])
def delete_live_class(live_id):
    """A teacher deletes their own live class (admins can delete any)."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = sqlite3.connect('users.db', timeout=10)
    try:
        cursor = conn.cursor()
        cursor.execute('SELECT teacher_id FROM live_classes WHERE id = ?', (live_id,))
        row = cursor.fetchone()
        if not row:
            return jsonify({'success': False, 'message': 'Live class not found'}), 404
        if row[0] != session['user_id'] and session.get('role') != 'admin':
            return jsonify({'success': False, 'message': 'You can only delete your own live classes'}), 403

        cursor.execute('DELETE FROM live_classes WHERE id = ?', (live_id,))
        conn.commit()
        return jsonify({'success': True})
    finally:
        conn.close()

@app.route('/resourses')
def resourses():
    """Render the resourses page"""
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    return render_template('Learner/resourses.html',
                         firstname=session['firstname'],
                         lastname=session['lastname'],
                         user_id=session['user_id'])

def format_file_size(bytes):
    if bytes == 0:
        return "0 Bytes"
    k = 1024
    sizes = ["Bytes", "KB", "MB", "GB"]
    i = int(math.floor(math.log(bytes) / math.log(k)))
    return f"{bytes / math.pow(k, i):.2f} {sizes[i]}"

@app.route('/api/resources/<int:resource_id>', methods=['DELETE'])
def delete_resource(resource_id):
    try:
        if 'user_id' not in session:
            return jsonify({
                'success': False,
                'message': 'Authentication required'
            }), 401

        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()

        cursor.execute('''
            SELECT user_id, file_name 
            FROM resources 
            WHERE id = ?
        ''', (resource_id,))
        resource = cursor.fetchone()

        if not resource:
            conn.close()
            return jsonify({
                'success': False,
                'message': 'Resource not found'
            }), 404

        owner_id, file_name = resource

        if int(owner_id) != int(session['user_id']):
            conn.close()
            return jsonify({
                'success': False,
                'message': 'You are not allowed to delete this resource'
            }), 403

        file_path = os.path.join(
            UPLOAD_FOLDER,
            str(owner_id),
            file_name
        )

        if os.path.exists(file_path):
            os.remove(file_path)

        cursor.execute(
            'DELETE FROM resources WHERE id = ?',
            (resource_id,)
        )
        # Clean up per-user like/view tracking rows for the deleted resource
        cursor.execute('DELETE FROM resource_likes WHERE resource_id = ?', (resource_id,))
        cursor.execute('DELETE FROM resource_views WHERE resource_id = ?', (resource_id,))
        conn.commit()
        conn.close()

        return jsonify({
            'success': True,
            'message': 'Resource deleted successfully'
        })

    except Exception as e:
        print(f"Delete error: {e}")
        return jsonify({
            'success': False,
            'message': 'Server error while deleting'
        }), 500

# ============ ADMIN: USER MANAGEMENT ============

@app.route('/api/admin/users', methods=['GET'])
def admin_get_users():
    """Get all users for admin panel."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    if session.get('role') != 'admin':
        return jsonify({'success': False, 'message': 'Admin access required'}), 403
    
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT id, firstname, lastname, email, role
        FROM users
        ORDER BY id DESC
    ''')
    
    users = cursor.fetchall()
    conn.close()
    
    result = [{
        'id': u[0],
        'firstname': u[1],
        'lastname': u[2],
        'email': u[3],
        'role': u[4] or 'student'
    } for u in users]
    
    return jsonify({'success': True, 'users': result})


@app.route('/api/admin/users/<int:user_id>', methods=['DELETE'])
def admin_delete_user(user_id):
    """Delete a user by ID (admin only)."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    if session.get('role') != 'admin':
        return jsonify({'success': False, 'message': 'Admin access required'}), 403
    
    # Prevent admin from deleting themselves
    if user_id == session['user_id']:
        return jsonify({'success': False, 'message': 'You cannot delete your own account'}), 403
    
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Check if user exists
    cursor.execute('SELECT id FROM users WHERE id = ?', (user_id,))
    if not cursor.fetchone():
        conn.close()
        return jsonify({'success': False, 'message': 'User not found'}), 404
    
    # Delete user's resources first (foreign key constraint)
    cursor.execute('DELETE FROM resources WHERE user_id = ?', (user_id,))
    
    # Delete user's messages
    cursor.execute('DELETE FROM messages WHERE sender_id = ? OR receiver_id = ?', (user_id, user_id))
    
    # Delete user's notifications
    cursor.execute('DELETE FROM notifications WHERE user_id = ?', (user_id,))
    
    # Delete user's complaints
    cursor.execute('DELETE FROM complaints WHERE user_id = ?', (user_id,))

    # Delete user's like/view tracking rows
    cursor.execute('DELETE FROM resource_likes WHERE user_id = ?', (user_id,))
    cursor.execute('DELETE FROM resource_views WHERE user_id = ?', (user_id,))

    # Delete strategy like tracking rows
    cursor.execute('DELETE FROM strategy_likes WHERE user_id = ?', (user_id,))

    # Delete opinion like tracking rows, and any opinions the user posted
    # (their opinion_likes rows are removed first since opinions is the
    # parent side of that relationship).
    cursor.execute('DELETE FROM opinion_likes WHERE user_id = ?', (user_id,))
    cursor.execute('''
        DELETE FROM opinion_likes WHERE opinion_id IN (
            SELECT id FROM opinions WHERE user_id = ?
        )
    ''', (user_id,))
    cursor.execute('DELETE FROM opinions WHERE user_id = ?', (user_id,))

    # Delete follow relationships in both directions
    cursor.execute('DELETE FROM follows WHERE follower_id = ? OR following_id = ?', (user_id, user_id))
    
    # Delete the user
    cursor.execute('DELETE FROM users WHERE id = ?', (user_id,))
    
    conn.commit()
    conn.close()
    
    return jsonify({'success': True, 'message': 'User deleted successfully'})



# Copy the exact database path/name from the sqlite3.connect(...) line that
# already exists in backen.py. If this points at a different file, you get
# "no such table: users" errors.
DB_PATH = "users.db"


# ============ PROFILE: LIVE CLASSES + RATINGS ============
# Uses the same users.db as the rest of the app.

def _profile_db():
    conn = sqlite3.connect('users.db', timeout=10)
    conn.row_factory = sqlite3.Row
    conn.execute("""
        CREATE TABLE IF NOT EXISTS teacher_ratings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            teacher_id INTEGER NOT NULL,
            reviewer_id INTEGER NOT NULL,
            stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
            comment TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE (teacher_id, reviewer_id),
            FOREIGN KEY (teacher_id) REFERENCES users (id),
            FOREIGN KEY (reviewer_id) REFERENCES users (id)
        )
    """)
    return conn


@app.route('/api/users/<int:user_id>/live-classes')
def api_user_live_classes(user_id):
    """Every live class a teacher has created (no time cutoff), for their profile."""
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    conn = _profile_db()
    try:
        rows = conn.execute(
            """SELECT id, title, description, start_time, duration_min, stream_url
               FROM live_classes
               WHERE teacher_id = ?
               ORDER BY start_time DESC""",
            (user_id,),
        ).fetchall()
    finally:
        conn.close()

    return jsonify({
        'success': True,
        'classes': [{
            'id': r['id'],
            'title': r['title'],
            'description': r['description'] or '',
            'scheduled_at': r['start_time'],
            'duration_minutes': r['duration_min'],
            'join_url': r['stream_url'],
            'attendees_count': 0,
        } for r in rows]
    })


@app.route('/api/users/<int:user_id>/ratings', methods=['GET'])
def api_user_ratings(user_id):
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    me = session['user_id']
    conn = _profile_db()
    try:
        summary = conn.execute(
            'SELECT COUNT(*) AS n, AVG(stars) AS avg FROM teacher_ratings WHERE teacher_id = ?',
            (user_id,),
        ).fetchone()

        distribution = {str(n): 0 for n in range(1, 6)}
        for r in conn.execute(
            'SELECT stars, COUNT(*) AS n FROM teacher_ratings WHERE teacher_id = ? GROUP BY stars',
            (user_id,),
        ).fetchall():
            distribution[str(r['stars'])] = r['n']

        rows = conn.execute(
            """SELECT r.id, r.reviewer_id, r.stars, r.comment, r.created_at,
                      u.firstname, u.lastname, u.avatar_filename
               FROM teacher_ratings r
               LEFT JOIN users u ON u.id = r.reviewer_id
               WHERE r.teacher_id = ?
               ORDER BY r.created_at DESC, r.id DESC
               LIMIT 100""",
            (user_id,),
        ).fetchall()
    finally:
        conn.close()

    reviews, my_review = [], None
    for r in rows:
        name = f"{(r['firstname'] or '').strip()} {(r['lastname'] or '').strip()}".strip() or 'Anonymous'
        reviews.append({
            'id': r['id'],
            'reviewer_name': name,
            'reviewer_avatar_url': get_avatar_url(r['reviewer_id'], r['avatar_filename']),
            'stars': r['stars'],
            'comment': r['comment'] or '',
            'created_at': to_iso_utc(r['created_at']),
        })
        if r['reviewer_id'] == me:
            my_review = {'stars': r['stars'], 'comment': r['comment'] or ''}

    count = summary['n'] or 0
    average = (summary['avg'] or 0) * 2   # stars are 1-5, shown out of ten

    return jsonify({
        'success': True,
        'average_out_of_ten': round(average, 1),
        'count': count,
        'distribution': distribution,
        'reviews': reviews,
        'my_review': my_review,
    })


@app.route('/api/users/<int:user_id>/ratings', methods=['POST'])
def api_post_user_rating(user_id):
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Authentication required'}), 401

    me = session['user_id']
    if me == user_id:
        return jsonify({'error': "You can't review yourself."}), 400

    data = request.get_json(silent=True) or {}
    try:
        stars = int(data.get('stars'))
    except (TypeError, ValueError):
        return jsonify({'error': 'Please pick a star rating.'}), 400
    if stars < 1 or stars > 5:
        return jsonify({'error': 'Stars must be between 1 and 5.'}), 400
    comment = (data.get('comment') or '').strip()[:500]

    conn = _profile_db()
    try:
        exists = conn.execute('SELECT 1 FROM users WHERE id = ?', (user_id,)).fetchone()
        if not exists:
            return jsonify({'error': 'User not found.'}), 404

        conn.execute(
            """INSERT INTO teacher_ratings (teacher_id, reviewer_id, stars, comment)
               VALUES (?, ?, ?, ?)
               ON CONFLICT(teacher_id, reviewer_id)
               DO UPDATE SET stars = excluded.stars,
                             comment = excluded.comment,
                             created_at = CURRENT_TIMESTAMP""",
            (user_id, me, stars, comment),
        )
        conn.commit()
    finally:
        conn.close()

    return jsonify({'success': True})


if __name__ == '__main__':
    app.run(debug=True, port=5000)