# Generated by Django 2.2.6 on 2023-01-13 13:39

from django.db import migrations
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('flow', '0012_noderun_inputs_component'),
    ]

    operations = [
        migrations.AddField(
            model_name='node',
            name='inputs_component',
            field=django_mysql.models.JSONField(default=list, verbose_name='前端参数组件'),
        ),
    ]