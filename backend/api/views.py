from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'Repository List': '/repo-list',
        'Repository details': '/repo/<str:pk>',
    }

    return Response(api_urls)