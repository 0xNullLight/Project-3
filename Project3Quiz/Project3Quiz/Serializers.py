#This will import from rest framework and the models from the models.py file 

from rest_framework import serializers
from .Models import Student, Question, QuestionOption

#This will create a class that will serialize the Student model
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        
#This will create a class that will serialize the Question model
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
        
#This will create a class that will serialize the QuestionOption model
class QuestionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionOption
        fields = '__all__'