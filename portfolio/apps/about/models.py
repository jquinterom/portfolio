from django.db import models

class About(models.Model):
    name = models.CharField(max_length=50, verbose_name='Nombre')
    age = models.IntegerField(verbose_name='Edad')
    email = models.EmailField(verbose_name='Correo')
    country = models.CharField(verbose_name='País', max_length=50)
    city = models.CharField(verbose_name='Ciudad', max_length=50)
    description = models.TextField(verbose_name='Descripción')
    curriculun_vitae = models.FileField(upload_to='about/curriculum/', verbose_name='CV')
    photo = models.ImageField(upload_to='about/photo/', verbose_name='Foto')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Acerca de"
        verbose_name_plural = "Acerca de"

    def __str__(self):
        return str(self.name)

