from django.urls import path
from rest_api.views import lista_user
from rest_api.views import lista_viaje
from rest_api.views import Autenti


urlpatterns=[
    path('lista_user', lista_user, name="Lista de Registro"),
    path('lista_viaje', lista_viaje, name="Lista de Viajes"),
    path('Autenti', Autenti, name="Autenti"),
]