from django.shortcuts import render, HttpResponse

from ..portfolio_.models import Project
# Create your views here.

def home(request):
    projects =  Project.objects.all()
    return render(request, "core/base.html", {'projects': projects})
