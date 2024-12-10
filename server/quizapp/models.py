from django.db import models

# Created models here.

# Quiz model
class Quiz(models.Model):
    id = models.CharField(max_length=255, primary_key=True)  # PK
    title = models.CharField(max_length=255)
    description = models.TextField()
    questions = models.JSONField()  # Store questions as an array (JSON format)
    difficulty = models.CharField(max_length=50)
    timeLimit = models.IntegerField()  # Store as a number (in seconds or minutes)

    def __str__(self):
        return self.title

# Question model
class Question(models.Model):
    id = models.CharField(max_length=255, primary_key=True)  # PK
    text = models.TextField()
    options = models.JSONField()  # Store options as an array
    correctAnswer = models.CharField(max_length=255)  # Store the correct answer
    difficulty = models.CharField(max_length=50)
    points = models.IntegerField()

    def __str__(self):
        return self.text

# Quiz Attempt model (to track user attempts)
class QuizAttempt(models.Model):
    id = models.CharField(max_length=255, primary_key=True)  # PK
    userId = models.ForeignKey('userapp.User', on_delete=models.CASCADE)  # FK to User model in userapp
    answers = models.JSONField()  # Store answers as an array
    score = models.FloatField()  # Store the score as a number (percentage)
    completedAt = models.DateTimeField(auto_now_add=True)  # Date when the quiz is completed

    def __str__(self):
        return f"QuizAttempt {self.id} by {self.userId.email}"

