# API endpoints are here

from rest_framework import viewsets
from .models import Quiz, QuizAttempt
from .serializers import QuizSerializer, QuizAttemptSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizAttemptViewSet(viewsets.ModelViewSet):
    queryset = QuizAttempt.objects.all()
    serializer_class = QuizAttemptSerializer
