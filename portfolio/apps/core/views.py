from django.shortcuts import render, HttpResponse
from ..portfolio_.models import Project
from ..portfolio_.models import ProjectType


def home(request):
    # proyectos 
    projects =  Project.objects.filter(active=1)

    return render(request, "core/base.html", {'projects': projects})
