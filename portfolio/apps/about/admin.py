from django.contrib import admin
from .models import About, SocialNetwork, Services


class AboutAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class SocialNetworkAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class ServicesAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

admin.site.register(About, AboutAdmin)
admin.site.register(SocialNetwork, SocialNetworkAdmin)
admin.site.register(Services, ServicesAdmin)

