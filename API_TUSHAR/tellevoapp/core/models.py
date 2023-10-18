from django.db import models

# Create your models here.
class User(models.Model):
    idUser = models.IntegerField(primary_key=True, verbose_name = "ID USUARIO")
    user = models.CharField(max_length=20,verbose_name = "Nombre Usuario")
    password = models.CharField(max_length=20, verbose_name = "Contraseña Usuario")
    nombre = models.CharField(max_length=20, verbose_name = "Nombre de la Persona")
    correo = models.EmailField(max_length=254, verbose_name = "Correo de la Persona")

    def __str__(self):
        return self.idUser

class Viaje(models.Model):
    idViaje = models.IntegerField(primary_key=True, verbose_name = "ID VIAJE")
    hora = models.IntegerField(verbose_name = "Hora de inicio del Viaje")
    costo = models.IntegerField(verbose_name = "Costo del Viaje")
    capacidad = models.IntegerField(verbose_name = "Capacidad de Pasajeros")

    def __str__(self):
        return self.idViaje

