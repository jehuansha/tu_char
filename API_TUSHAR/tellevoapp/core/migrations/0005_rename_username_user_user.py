# Generated by Django 4.2.2 on 2023-11-17 02:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_rename_user_user_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='username',
            new_name='user',
        ),
    ]
