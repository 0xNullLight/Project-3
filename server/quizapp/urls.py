from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuizAttemptViewSet

router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)
router.register(r'quiz-attempts', QuizAttemptViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
