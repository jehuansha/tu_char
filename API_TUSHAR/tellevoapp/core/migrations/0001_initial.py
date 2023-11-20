# Generated by Django 4.2.2 on 2023-10-15 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user' , models.CharField(max_length=20,verbose_name = "Nombre Usuario")),
                ('password' , models.CharField(max_length=20, verbose_name = "Contraseña Usuario")),
                ('nombre' , models.CharField(max_length=20, verbose_name = "Nombre de la Persona")),
                ('correo' , models.CharField(max_length=50, verbose_name = "Correo de la Persona")),
                ('rol', models.CharField(max_length=15, verbose_name = "Rol")),
            ],
        ),
        migrations.CreateModel(
            name='Viaje',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patente', models.CharField(max_length=10,verbose_name = "patente")),
                ('hora', models.CharField(max_length=10,verbose_name = "Hora de inicio del Viaje")),
                ('costo', models.IntegerField(verbose_name = "Costo del Viaje")),
                ('capacidad', models.IntegerField(verbose_name = "Capacidad de Pasajeros")),
                ('destino', models.CharField(max_length=20, verbose_name = "destino")),
                ('duenno', models.CharField(max_length=20, verbose_name = "dueño")),
                ('url_imagen', models.URLField(max_length=500, verbose_name = "url_imagen")),
            ],
        ),
    ]



