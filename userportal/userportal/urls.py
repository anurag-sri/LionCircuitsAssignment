from django.urls import path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    # API endpoints
    path('api/login/', views.login),
    path('api/upload/', views.upload_file),
    path('api/files/', views.get_files),
    path('api/portal-details/', views.get_portal_details),
    path('api/user-profile/', views.user_profile),

    # Catch-all URL pattern for React frontend
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),

]
