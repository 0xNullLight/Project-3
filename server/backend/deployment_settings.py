import os
import dj_database_url
from .settings import *
from .settings import BASE_DIR

# Add this line after the INSTALLED_APPS section
SITE_ID = 1

# Make sure CORS_ALLOWED_ORIGINS includes your frontend URL
CORS_ALLOWED_ORIGINS = [
    'https://' + os.environ.get('RENDER_EXTERNAL_HOSTNAME', ''),
    'http://localhost:5173'
]
# Production host settings
ALLOWED_HOSTS = [os.environ.get('RENDER_EXTERNAL_HOSTNAME', '*')]

# Security settings
DEBUG = False
SECRET_KEY = os.environ.get('SECRET_KEY', 'fallback-secret-key')

# Production middleware with WhiteNoise for static files
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Static files configuration
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / "staticfiles"

# WhiteNoise storage backend for static files
STORAGES = {
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    },
}

# Database configuration with fallback
DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL', 'sqlite:///db.sqlite3'),
        conn_max_age=600
    )
}
