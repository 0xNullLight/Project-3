# Api Endpoints will go here 
# We will Create a function for each endpoint

from django.shortcuts import render
from .models import Question, Student
from .Serializers import QuestionSerializer
from rest_framework.response import UserResponse 
from rest_framework.decorators import api_views

