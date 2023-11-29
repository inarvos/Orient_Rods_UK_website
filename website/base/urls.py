from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('test/', views.test, name="test"),
    path('launch_your_speaking_event/', views.launch_your_speaking_event,
         name="launch_your_speaking_event"),
    path('about/', views.about, name="about"),
    path('get_in_touch/', views.get_in_touch, name="get_in_touch"),
    path('speakers/', views.speakers, name="speakers"),
    path('privacy_policy/', views.privacy_policy, name="privacy_policy"),
    path('terms_and_conditions/', views.terms_and_conditions,
         name="terms_and_conditions"),
    path('register/', views.register, name='register')
]
