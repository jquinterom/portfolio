from django.db import models


# Modelo de blog
class Blog(models.Model):
    title = models.CharField(max_length=50, verbose_name='Título')
    description = models.TextField(verbose_name="Descripción")
    image = models.ImageField(verbose_name='Imagen', upload_to='blog/')
    link = models.CharField(max_length=2000, verbose_name="Enlace", default='#', null=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Blog"
        verbose_name_plural = "Blogs"


    def __str__(self):
        return str(self.title)
