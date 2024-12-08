# This will Import models from Django
from django.db import models

# This class defines the Student model, username, score, and status fields
class Student(models.Model):
    username = models.CharField(max_length=100, unique=True)
    score = models.IntegerField(default=0)
    status = models.CharField(max_length=100, default="active")
def __str__(self):
    return self.username

# Class for Question model, question, option1, option2, option3, option4, and answer fields
    class Question(models.Model):
        question = models.CharField(max_length=1000, unique=True)
        option1 = models.CharField(max_length=1000, unique=True)
        option2 = models.CharField(max_length=1000, unique=True)
        option3 = models.CharField(max_length=1000, unique=True)
        option4 = models.CharField(max_length=1000, unique=True)
        answer = models.CharField(max_length=1000, unique=True)
    
        def __str__(self):
            return self.question
        
    #Class that defines the QuestionOption model, question, option, is_correct and question fields
    class QuestionOption(models.Model):
        question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
        option1 = models.CharField(max_length=1000)
        option2 = models.CharField(max_length=1000)
        option3 = models.CharField(max_length=1000)
        option4 = models.CharField(max_length=1000)
        is_correct = models.BooleanField()
        def __str__(self):
            return f"{self.option} for {self.question.question}"
 