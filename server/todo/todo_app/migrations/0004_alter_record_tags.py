# Generated by Django 3.2 on 2022-07-09 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0003_alter_record_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='tags',
            field=models.ManyToManyField(to='todo_app.Tag', verbose_name='Тэги'),
        ),
    ]
