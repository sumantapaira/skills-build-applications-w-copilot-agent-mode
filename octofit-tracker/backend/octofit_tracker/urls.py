"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    codespace_name = os.environ.get('CODESPACE_NAME', '')
    base_url = f'https://{codespace_name}-8000.app.github.dev' if codespace_name else 'http://localhost:8000'
    return JsonResponse({
        'users': f'{base_url}/api/users/',
        'teams': f'{base_url}/api/teams/',
        'activities': f'{base_url}/api/activities/',
        'leaderboard': f'{base_url}/api/leaderboard/',
        'workouts': f'{base_url}/api/workouts/',
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', api_root, name='api_root'),
    path('api/users/', lambda request: JsonResponse({'message': 'users endpoint'})),
    path('api/teams/', lambda request: JsonResponse({'message': 'teams endpoint'})),
    path('api/activities/', lambda request: JsonResponse({'message': 'activities endpoint'})),
    path('api/leaderboard/', lambda request: JsonResponse({'message': 'leaderboard endpoint'})),
    path('api/workouts/', lambda request: JsonResponse({'message': 'workouts endpoint'})),
]
