from django import forms
from django import forms
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV2Checkbox


class ContactForm(forms.Form):
    name = forms.CharField(label='Nombre', required=True, widget=forms.TextInput(
        attrs={
            'class' : 'form-control',
            'placeholder' : 'Name'
        }
    ), min_length=2, max_length=50)
    email = forms.EmailField(label='Email', required=True, widget=forms.EmailInput(
        attrs={
            'class' : 'form-control',
            'placeholder' : 'Email',
        }
    ), min_length=2, max_length=50)
    content = forms.CharField(label='Contenido', required=True, widget=forms.Textarea(
        attrs={
            'class' : 'form-control',
            'placeholder' : 'Message',
            'rows': '5',
        }
    ), min_length=10, max_length=1000)
 
