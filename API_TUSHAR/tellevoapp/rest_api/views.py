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
from django.contrib.auth import authenticate, login

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
        username = data.get('username')
        # Verificar si ya existe un usuario con el mismo correo electrónico
        existing_user = User.objects.filter(username=username).first()
        if existing_user:
            return Response({'error': 'Ya existe un usuario con este nombre de usuario.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def Autenti(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        autenticado = authenticate(request, username=username, password=password)
        # autenticado=user
        if autenticado is not None:
            login(request, autenticado)
            return Response({'success': True, 'message': 'Inicio de sesion existoso'})
        return Response({'success': False, 'message': 'Credenciales incorrectas'})


@csrf_exempt
@api_view(['GET'])
def lista_viaje(request):
    categorias = Viaje.objects.all()
    serializer = ViajeSerializer(categorias, many=True)
    return Response(serializer.data)