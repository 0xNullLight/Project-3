# imports from django.contrib and models from the current directory
from django.contrib import admin
from .models import Quiz, Question, QuizAttempt

# Models are registered here.
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(QuizAttempt)