from django.db import models


# Modelo para educación
class Education(models.Model):
    title = models.CharField(max_length=50, verbose_name='Título obtenido')
    institution = models.CharField(max_length=50, verbose_name='Institución')
    start_date = models.DateField(verbose_name='Fecha inicio')
    end_date = models.DateField(verbose_name='Fecha fin')
    description_title = models.TextField(verbose_name="Descripción del titulo")
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Educación"
        verbose_name_plural = "Educación"

    def __str__(self):
        return str(self.title)


# Modelo para la experiencia
class Experience(models.Model):
    position = models.CharField(max_length=50, verbose_name='Cargo')
    employer = models.CharField(max_length=100, verbose_name="Empleador")
    start_date = models.DateField(verbose_name='Fecha inicio')
    end_date = models.DateField(verbose_name='Fecha fin')
    description_position = models.TextField(verbose_name="Descripción del cargo")
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Experiencia"
        verbose_name_plural = "Experiencias"

    def __str__(self):
        return str(self.position)


