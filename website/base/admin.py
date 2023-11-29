from django.contrib import admin

from .models import Event, Speaker, Topic, User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ('full_name', 'email', 'password')
    list_display = ['id', 'full_name', 'email', 'password']


@admin.register(Speaker)
class SpeakerAdmin(admin.ModelAdmin):
    fields = ('User', 'Name', 'Description', 'Email', 'Updated', 'Created')
    list_display = ['id', 'User', 'Name',
                    'Description', 'Email', 'Updated', 'Created']


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    fields = ('Topic', 'Description', 'Updated', 'Created')
    list_display = ['id', 'Topic', 'Description', 'Updated', 'Created']


@admin.register(Event)
class TopicAdmin(admin.ModelAdmin):
    fields = ('Topic_name', 'Speaker_name', 'Created_by', 'Name',
              'Description', 'DateTime', 'Location', 'Guest_Capacity', 'Status')
    list_display = ['id', 'Topic_name', 'Created_by', 'Name', 'DateTime']
