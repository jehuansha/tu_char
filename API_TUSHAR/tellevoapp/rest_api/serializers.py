from rest_framework import serializers
from core.models import User
from core.models import Viaje

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['idUser', 'user','password','nombre','correo']

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = ['idViaje', 'hora','costo','capacidad']        
