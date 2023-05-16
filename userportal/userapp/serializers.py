from rest_framework import serializers
from .models import UploadedFile, UserProfile

class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['filename', 'date_uploaded', 'file_type']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['name', 'addresses', 'phone_numbers']
