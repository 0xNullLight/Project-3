# API endpoints are here
# The provided code defines a Django REST framework viewset class named [`QuizViewSet`] 
# In summary, the [`QuizViewSet`](Project3Quiz/Project3Quiz/Views.py ) class is a comprehensive and efficient way to manage CRUD operations for the model in a Django REST framework application, 
# leveraging the power of viewsets and serializers to handle data retrieval, validation, and serialization.

from rest_framework import viewsets
from .models import Quiz, QuizAttempt
from .serializers import QuizSerializer, QuizAttemptSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizAttemptViewSet(viewsets.ModelViewSet):
    queryset = QuizAttempt.objects.all()
    serializer_class = QuizAttemptSerializer
