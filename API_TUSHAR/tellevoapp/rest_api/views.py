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
@api_view(['GET','POST'])
def lista_user(request):
    if request.method == 'GET':
        categorias = User.objects.all()
        serializer = UserSerializer(categorias, many=True)
        return Response(serializer.data)
    elif request.method == 'POST': 
        data = request.data
        user = data.get('user')
        # Verificar si ya existe un usuario con el mismo correo electrónico
        existing_user = User.objects.filter(user=user).first()
        if existing_user:
            return Response({'error': 'Ya existe un usuario con este nombre de usuario.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET'])
def lista_viaje(request):
    categorias = Viaje.objects.all()
    serializer = ViajeSerializer(categorias, many=True)
    return Response(serializer.data)