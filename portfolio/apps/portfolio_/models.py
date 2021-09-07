from django.db import models

class ProjectType(models.Model):
    title = models.CharField(max_length=50, verbose_name="Título")
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name= "Tipo de proyecto"
        verbose_name_plural = "Tipos de proyectos"
        ordering = ['title']

    def __str__(self):
        return str(self.title)


class Project (models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name='Descripción')
    image = models.ImageField(verbose_name='Imagen', upload_to='projects')
    type_project = models.ForeignKey(ProjectType, on_delete=models.CASCADE, default=1)
    active = models.BooleanField(default=True, verbose_name="Activo")
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "proyecto"
        verbose_name_plural = "proyectos"
        ordering = ['title']

    def __str__(self):
        return str(self.title)

