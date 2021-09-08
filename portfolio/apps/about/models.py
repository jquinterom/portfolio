from django.db import models

class About(models.Model):
    name = models.CharField(max_length=50, verbose_name='Nombre')
    age = models.IntegerField(verbose_name='Edad')
    email = models.EmailField(verbose_name='Correo')
    country = models.CharField(verbose_name='País', max_length=50)
    city = models.CharField(verbose_name='Ciudad', max_length=50)
    about_me = models.CharField(max_length=200, verbose_name="Pequeña descripción")
    description = models.TextField(verbose_name='Descripción', default="")
    curriculum_vitae = models.FileField(upload_to='about/curriculum/', verbose_name='CV')
    photo = models.ImageField(upload_to='about/photo/', verbose_name='Foto')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Acerca de"
        verbose_name_plural = "Acerca de"

    def __str__(self):
        return str(self.name)


class SocialNetwork(models.Model):
    FACEBOOK = 'ion-logo-facebook'
    GITHUB = 'ion-logo-github'
    LINKEDIN = 'ion-logo-linkedin'
    SOCIAL_NETWORKS = [
        (FACEBOOK, 'Facebook'),
        (GITHUB, 'Github'),
        (LINKEDIN, 'Linkedin'),
    ]
    name = models.CharField(max_length=50, verbose_name='Nombre Aplicación')
    class_name = models.CharField(max_length=50, choices=SOCIAL_NETWORKS, default=FACEBOOK, verbose_name='Clase de aplicación')
    link = models.CharField(max_length=2000, verbose_name='Enlace perfil')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Red social"
        verbose_name_plural = "Redes sociales"

    def __str__(self):
        return str(self.name)
