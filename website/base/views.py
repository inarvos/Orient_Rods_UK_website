import os
from pathlib import Path

from django.shortcuts import render

from .forms import RegisterForm
from .models import Speaker

BASE_DIR = str(Path(__file__).resolve().parent.parent)


print(BASE_DIR+'static/images/about_page_logo')
about_page_img = []
for file in os.listdir(BASE_DIR+'/static/images/about_page_logo'):
    file = 'images/about_page_logo/'+file
    about_page_img.append(file)
about_page_img.sort()

# print(about_page_img)

# speaker = Speaker.objects.all()
# print("--------------")
# print(type(speaker))
# print(speaker[0])
# print("--------------")
# print(type(speaker[0]))
# print(speaker[0].email)
# print("--------------")


def index(request):
    # speaker = Speaker.objects.all()
    content = {'title': "Home",
               #    'speaker': speaker
               }
    return render(request, 'index.html', content)


def about(request):
    content = {'title': "about",
               'about_page_img': about_page_img,
               }
    return render(request, 'about.html', content)


def speakers(request):
    content = {'title': "speakers"}
    return render(request, 'speakers.html', content)


def terms_and_conditions(request):
    content = {'title': "terms_and_conditions"}
    return render(request, 'terms-and-conditions.html', content)


def privacy_policy(request):
    content = {'title': "privacy_policy"}
    return render(request, 'privacy_policy.html', content)


def get_in_touch(request):
    content = {'title': "get_in_touch"}
    return render(request, 'get_in_touch.html', content)


def launch_your_speaking_event(request):
    content = {'title': "launch_your_speaking_event"}
    return render(request, 'launch_your_speaking_event.html', content)


def test(request):
    return render(request, 'test.html')


def register(request):
    content = {'title': "register"}
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request, "register.html", content)
