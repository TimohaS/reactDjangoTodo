# Generated by Django 3.2 on 2022-07-09 13:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0002_auto_20220709_1543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo_app.author'),
        ),
    ]
