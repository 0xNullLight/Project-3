from rest_framework import serializers
from .models import Quiz, Question, QuizAttempt

# Serializers define the API representation.
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['__all__']

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ['__all__']

class QuizAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizAttempt
        fields = ['__all__']