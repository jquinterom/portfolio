from django.shortcuts import render, HttpResponse

from ..portfolio_.models import Project
from ..portfolio_.models import ProjectType
# Create your views here.

def home(request):
    # tipo de proyectos
    projectsTypes = ProjectType.objects.all()

    # proyectos 
    projects =  Project.objects.all()
    return render(request, "core/base.html", {'projects': projects, 'projectsTypes': projectsTypes})
