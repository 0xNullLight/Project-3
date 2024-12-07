# This will Import models from Django
from django.db import models

# This class defines the Student model, username, score, and status fields
class Student(models.Model):
    username = models.CharField(max_length=100)
    score = models.IntegerField()
    status = models.CharField(max_length=100)
def __str__(self):
    return self.username

# Class for Question model, question, option1, option2, option3, option4, and answer fields
    class Question(models.Model):
        question = models.CharField(max_length=1000)
        def __str__(self):
            return self.question
        
        option1 = models.CharField(max_length=1000) 
        def __str__(self):
            return self.option1
        
        option2 = models.CharField(max_length=1000)
        def __str__(self):
            return self.option2
        
        option3 = models.CharField(max_length=1000)
        def __str__(self):
            return self.option3
        
        option4 = models.CharField(max_length=1000)
        def __str__(self):
            return self.option4
        
        answer = models.CharField(max_length=1000)
        def __str__(self):
            return self.answer
        
    