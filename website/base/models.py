from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone


class User(models.Model):
    full_name = models.CharField(
        default=None, blank=False, null=False, max_length=100)
    email = models.EmailField(
        default=None, blank=False, null=False, max_length=100)
    password = models.CharField(
        default=None, blank=False, null=False, max_length=100)

    def __str__(self):
        return f"User(name={self.full_name}, email={self.email}, id={self.id})"


class Speaker(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    Name = models.CharField(max_length=200, null=False)
    Description = models.TextField(null=True, blank=True)
    Email = models.EmailField(null=False)
    Updated = models.DateTimeField(default=timezone.now)
    Created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Name


class Topic(models.Model):
    Topic = models.CharField(max_length=500, null=True)
    Description = models.TextField(null=True, blank=True)
    Updated = models.DateTimeField(default=timezone.now)
    Created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Topic


class Event(models.Model):
    Topic_name = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    Speaker_name = models.ForeignKey(
        Speaker, on_delete=models.SET_NULL, null=True)
    Created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=200, null=False)
    Description = models.TextField(null=True, blank=True)
    DateTime = models.DateTimeField(null=True)
    Location = models.CharField(max_length=500, null=True)
    Guest_Capacity = models.PositiveIntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(100)])
    Status = models.BooleanField(default=True)

    def __str__(self):
        return self.Name
