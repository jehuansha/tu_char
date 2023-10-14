from django.db import models

# Create your models here.
class User(models.Model):
    idUser = models.IntegerField(primary_key=True, verbose_name = "ID USUARIO")
    nombre = models.CharField(max_length=20,verbose_name = "Nombre de Usuario")
    contraseña = models.CharField(max_length=20, verbose_name = "Contraseña Usuario")

    def __str__(self):
        return self.idUser

class Viaje(models.Model):
    idViaje = models.IntegerField(primary_key=True, verbose_name = "ID VIAJE")
    hora = models.IntegerField(verbose_name = "Hora de inicio del Viaje")
    costo = models.CharField(max_length=5,verbose_name = "Costo del Viaje")
    capacidad = models.CharField(max_length=1, verbose_name = "Capacidad de Pasajeros")

    def __str__(self):
        return self.idViaje

