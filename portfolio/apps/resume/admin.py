from django.contrib import admin
from .models import Education, Experience, Skill


class EducationAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class ExperiencenAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')


admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperiencenAdmin)
admin.site.register(Skill, SkillAdmin)

