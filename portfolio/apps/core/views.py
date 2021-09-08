from django.shortcuts import render, HttpResponse
from ..portfolio_.models import Project
from ..about.models import About, SocialNetwork, Services
from ..resume.models import Education, Experience, Skill
from ..blog.models import Blog
from ..contact.forms import ContactForm


def home(request):
    # proyectos
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
