from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from core.models import User
from core.models import Viaje
from .serializers import UserSerializer
from .serializers import ViajeSerializer

# Create your views here.
@csrf_exempt
@api_view(['GET'])
def lista_user(request):
    categorias = User.objects.all()
    serializer = UserSerializer(categorias, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def lista_viaje(request):
    categorias = Viaje.objects.all()
    serializer = ViajeSerializer(categorias, many=True)
    return Response(serializer.data)