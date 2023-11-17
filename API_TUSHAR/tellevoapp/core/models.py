from django.db import models

# Create your models here.
class Usuario(models.Model):
    
    user = models.CharField(max_length=20,verbose_name = "Nombre Usuario")
    password = models.CharField(max_length=20, verbose_name = "Contraseña Usuario")
    nombre = models.CharField(max_length=20, verbose_name = "Nombre de la Persona")
    correo = models.CharField(max_length=50, verbose_name = "Correo de la Persona")
    def __str__(self):
        return self.user

class Viaje(models.Model):
    
    hora = models.IntegerField(verbose_name = "Hora de inicio del Viaje")
    costo = models.IntegerField(verbose_name = "Costo del Viaje")
    capacidad = models.IntegerField(verbose_name = "Capacidad de Pasajeros")


