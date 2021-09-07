from django.contrib import admin
from .models import Project
from .models import ProjectType


class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')


class ProjectTypeAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectType, ProjectTypeAdmin)
