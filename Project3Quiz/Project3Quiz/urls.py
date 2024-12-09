# Description: This file will contain the URL patterns for the app.

#Must import the path function from the django.urls module and the views from the views.py file
#This will allow us to create the URL patterns for the app

from django.urls import path    
from . import views

# URL patterns for the app
urlpatterns = [
    path("questions/", views.questions, name="question_list"),
    path("has answered questions/", views.has_answered_questions, name="has_answered_questions"),
    path("")
]