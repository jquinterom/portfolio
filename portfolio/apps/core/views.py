from django.shortcuts import render, HttpResponse
from ..portfolio_.models import Project
from ..portfolio_.models import ProjectType


def home(request):
    # proyectos
    projects = Project.objects.filter(active=1)

    #types projects
    types_project = []
    for tp in projects:
        exists = tp.type_project in types_project;
        if(tp.type_project not in types_project):
            types_project.append(tp.type_project)

    return render(request, "core/base.html", {'projects': projects, 'types_project': types_project})
