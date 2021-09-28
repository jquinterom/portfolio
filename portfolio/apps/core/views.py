from django.shortcuts import render, redirect
from ..portfolio_.models import Project
from ..about.models import About, SocialNetwork, Services
from ..resume.models import Education, Experience, Skill
from ..blog.models import Blog
from ..contact.forms import ContactForm
from django.urls import reverse
from django.core.mail import EmailMessage
from django.http import HttpResponse
import json
import os
from django.conf import settings



def home(request):
    # Projects 
    projects = Project.objects.filter(active=1)

    #types projects
    types_project = []
    for tp in projects:
        exists = tp.type_project in types_project;
        if(tp.type_project not in types_project):
            types_project.append(tp.type_project)

    # About information
    about = About.objects.first()
    social_networks = SocialNetwork.objects.all()
    services = Services.objects.all()

    # Resume
    education = Education.objects.all()
    experience = Experience.objects.all()
    
    skills = Skill.objects.all()
    len_skills = len(skills)
    half = round(len_skills//2)
    if(len_skills % 2 != 0):
        # impar
        half+=1 # Con esto se hace que la primera lista sea un objeto mas grande que la 2

    skills1 = skills[:half]
    skills2 = skills[half:]

    # Blog
    blogs = Blog.objects.all()

    # Contact
    contact_form = ContactForm()

    # Manipulando el envio de correo
    if request.method == 'POST':
        contact_form = ContactForm(data=request.POST)

        if contact_form.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            content = request.POST.get('content', '')
            # Enviamos el correo y redireccionamos 
            email_to_send = EmailMessage(
                'Portafolio: Nuevo mensaje de contacto',
                'De {} <{}>\n\nEscribió:\n\n{}'.format(name, email, content),
                'no-reply@inbox.mailtrap.io',
                ['jfqm7710@gmail.com'],
                reply_to=[email]
            )

            try:
                email_to_send.send()
                # Todo funcionó redireccionamos OK
                return HttpResponse(json.dumps({'success': True}), content_type='application/json')
            except Exception as e:
                # Algo no funcionó
                return HttpResponse(json.dumps({'success': False, 'message': str(e)}), content_type='application/json')



    return render(request, "core/base.html", 
                  {
                      'projects': projects, 
                      'types_project': types_project,
                      'about' : about,
                      'social_networks': social_networks,
                      'services': services,
                      'education': education,
                      'experience': experience,
                      'skills1': skills1,
                      'skills2': skills2,
                      'blogs': blogs,
                      'contact_form': contact_form,
                  })
