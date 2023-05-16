from django.shortcuts import render

# Create your views here.
# api/views.py

from django.contrib.auth import authenticate, login as auth_login
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import UploadedFile, UserProfile
from .serializers import UploadedFileSerializer, UserProfileSerializer

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, username=email, password=password)
    if user is not None:
        auth_login(request, user)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid credentials'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_file(request):
    file = request.FILES.get('file')
    if file:
        uploaded_file = UploadedFile(file=file, user=request.user)
        uploaded_file.save()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'message': 'No file provided'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_files(request):
    files = UploadedFile.objects.filter(user=request.user)
    serializer = UploadedFileSerializer(files, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_portal_details(request):
    total_files = UploadedFile.objects.count()
    pdf_files = UploadedFile.objects.filter(file_type='pdf').count()
    excel_files = UploadedFile.objects.filter(file_type='excel').count()
    txt_files = UploadedFile.objects.filter(file_type='txt').count()
    user_files = UploadedFile.objects.filter(user=request.user).count()
    return JsonResponse(
        {
            'total_files': total_files,
            'pdf_files': pdf_files,
            'excel_files': excel_files,
            'txt_files': txt_files,
            'user_files': user_files,
        }
    )

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    if request.method == 'GET':
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile, data=request.data)
if serializer.is_valid():
serializer.save()
return JsonResponse({'success': True})
else:
return JsonResponse({'success': False, 'message': 'Invalid data'})
else:
return JsonResponse({'success': False, 'message': 'Method not allowed'})
