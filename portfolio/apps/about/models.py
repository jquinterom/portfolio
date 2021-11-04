from django.db import models

# modelo de acerca de 
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


# modelo de redes sociales
class SocialNetwork(models.Model):
    FACEBOOK = 'ion-logo-facebook'
    GITHUB = 'ion-logo-github'
    LINKEDIN = 'ion-logo-linkedin'
    TWITTER = 'ion-logo-twitter'
    SOCIAL_NETWORKS = [
        (FACEBOOK, 'Facebook'),
        (GITHUB, 'Github'),
        (LINKEDIN, 'Linkedin'),
        (TWITTER, 'Twitter'),
    ]
    name = models.CharField(max_length=50, verbose_name='Nombre Aplicación')
    class_name = models.CharField(max_length=50, choices=SOCIAL_NETWORKS, default=FACEBOOK, verbose_name='Clase de aplicación')
    link = models.CharField(max_length=2000, verbose_name='Enlace perfil')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Red social"
        verbose_name_plural = "Redes sociales"
        ordering = ['name']

    def __str__(self):
        return str(self.name)


# Modelo de servicios
class Services(models.Model):
    name = models.CharField(max_length=30, verbose_name="Nombre")
    description = models.CharField(max_length=200, verbose_name='Descripción', default="")
    icon_code = models.CharField(max_length=50, verbose_name='Icono de servicio') 
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Servicio"
        verbose_name_plural = "Servicios"
        ordering = ['name']

    def __str__(self):
        return str(self.name)

