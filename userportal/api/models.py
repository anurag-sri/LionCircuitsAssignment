from django.db import models

# Create your models here.
# api/models.py

from django.contrib.auth.models import User
from django.db import models

class UploadedFile(models.Model):
    FILE_TYPES = (
        ('pdf', 'PDF'),
        ('excel', 'Excel'),
        ('txt', 'Text'),
    )

    file = models.FileField(upload_to='uploads/')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    file_type = models.CharField(max_length=10, choices=FILE_TYPES)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    addresses = models.TextField()
    phone_numbers = models.TextField()
