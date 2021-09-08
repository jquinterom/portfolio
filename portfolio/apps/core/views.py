from django.shortcuts import render, HttpResponse
from ..portfolio_.models import Project
from ..about.models import About, SocialNetwork, Services
from ..resume.models import Education, Experience, Skill


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

    return render(request, "core/base.html", 
                  {
                      'projects': projects, 
                      'types_project': types_project,
                      'about' : about,
                      'social_networks': social_networks,
                      'services': services,
                      'education': education,
                      'experience': experience,
                      'skills': skills,
                  })
