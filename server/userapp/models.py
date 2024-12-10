from django.db import models

# Created migration models here.
class User(models.Model):
    id = models.CharField(max_length=255, primary_key=True)  # PK
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # For simplicity, keep password as a string
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email