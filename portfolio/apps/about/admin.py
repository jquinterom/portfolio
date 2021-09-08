from django.contrib import admin
from .models import About
from .models import SocialNetwork


class AboutAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

class SocialNetworkAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

admin.site.register(About, AboutAdmin)
admin.site.register(SocialNetwork, SocialNetworkAdmin)

