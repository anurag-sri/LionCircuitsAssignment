from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UploadedFile, UserProfile
from .serializers import UploadedFileSerializer, UserProfileSerializer

@api_view(['POST'])
def login(request):
    # Perform login logic here
    # Return success or error response

@api_view(['POST'])
def upload_file(request):
    # Perform file upload logic here
    # Return success or error response

@api_view(['GET'])
def get_files(request):
    files = UploadedFile.objects.all()
    serializer = UploadedFileSerializer(files, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_portal_details(request):
    files = UploadedFile.objects.all()
    file_types = files.values('file_type').annotate(count=models.Count('id'))
    user_files = files.values('user').annotate(count=models.Count('id'))

    portal_details = {
        'total_files': files.count(),
        'file_types': {item['file_type']: item['count'] for item in file_types},
        'user_files': {item['user']: item['count'] for item in user_files}
    }

    return Response(portal_details)

@api_view(['GET', 'PUT'])
def user_profile(request):
    # Retrieve the user's profile based on the authenticated user
    profile = UserProfile.objects.get(user=request.user)

    if request.method == 'PUT':
        serializer = UserProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserProfileSerializer(profile)
    return Response(serializer.data)
