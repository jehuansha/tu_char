from rest_framework import serializers
from core.models import Usuario
from core.models import Viaje

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['user','password','nombre','correo']

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = ['hora','costo','capacidad']        
