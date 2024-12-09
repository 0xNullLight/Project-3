from rest_framework import serializers
from .models import Quiz, Question, QuizAttempt

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text', 'options', 'correctAnswer', 'difficulty', 'points']

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'description', 'questions', 'difficulty', 'timeLimit']

class QuizAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizAttempt
        fields = ['id', 'userId', 'answers', 'score', 'completedAt']