# Django imports
from django.apps import AppConfig

# By defining class QuizappConfig, we can configure the app name and other settings.
# This is typically the same name as the directory name containing the code
class QuizappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'quizapp'
