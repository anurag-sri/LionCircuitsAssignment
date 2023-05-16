# api/urls.py

from django.urls import path
from .views import login, upload_file, get_files, get_portal_details, user_profile
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('login/', login),
    path('upload/', upload_file),
    path('files/', get_files),
    path('portal-details/', get_portal_details),
    path('user-profile/', user_profile),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]
