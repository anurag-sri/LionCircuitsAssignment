from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    addresses = models.TextField()
    phone_numbers = models.TextField()

class UploadedFile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    filename = models.CharField(max_length=255)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    file_type = models.CharField(max_length=20)
