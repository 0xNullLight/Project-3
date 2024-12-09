# This file will connect the models to the admin panel

from django.contrib import admin
from .Models import Student, Question, QuestionOption

#imports the Student, Question, and QuestionOption models from the .models module
#and registers them with the admin panel
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['username', 'score', 'status']
    
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['question', 'option1', 'option2', 'option3', 'option4', 'answer']
    
@admin.register(QuestionOption)
class QuestionOptionAdmin(admin.ModelAdmin):
    list_display = ['question', 'option1', 'option2', 'option3', 'option4', 'is_correct']
    
