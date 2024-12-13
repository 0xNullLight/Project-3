"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Required to make a seeminglessly switch between deployment_settings and the original settings.
settiings_module = 'api.deployment_settings' if 'RENDER_EXTERNAL_HOSTNAME' in os.environ else 'api.settings'

application = get_wsgi_application()
