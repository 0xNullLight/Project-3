# This file contains the URL patterns for the app.

# Must import the path function from the django.urls module and the views from the views.py file
# This is the URL patterns for the app

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuizAttemptViewSet

router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)
router.register(r'quiz-attempts', QuizAttemptViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
