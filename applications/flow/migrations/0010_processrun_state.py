# Generated by Django 2.2.6 on 2022-10-26 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flow', '0009_nodetemplate_create_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='processrun',
            name='state',
            field=models.CharField(default='', max_length=32, verbose_name='作业流状态'),
        ),
    ]
