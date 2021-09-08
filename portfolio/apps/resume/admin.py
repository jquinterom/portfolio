from django.contrib import admin
from .models import Education, Experience


class EducationAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class ExperiencenAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')


admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperiencenAdmin)

