from django.forms import ModelForm

from .models import Speaker, User


class RegisterForm(ModelForm):
    class Meta:
        model = User
        fields = "__all__"


# class Speaker_Register_Form(ModelForm):
#     class Meta:
#         model = Speaker
#         filter-'__all__'
