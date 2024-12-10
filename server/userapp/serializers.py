from rest_framework import serializers
from .models import User

# Serializer migrations for the User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'createdAt', 'updatedAt']