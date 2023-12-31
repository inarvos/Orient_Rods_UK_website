# Generated by Django 3.2.13 on 2022-06-23 12:42

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=200)),
                ('Description', models.TextField(blank=True, null=True)),
                ('DateTime', models.DateTimeField(null=True)),
                ('Location', models.CharField(max_length=500, null=True)),
                ('Guest_Capacity', models.PositiveIntegerField(default=10, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)])),
                ('Status', models.BooleanField(default=True)),
                ('Created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.user')),
                ('Speaker_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.speaker')),
                ('Topic_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.topic')),
            ],
        ),
    ]
