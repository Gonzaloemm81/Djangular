from django.db import models

# Create your models here.
class Servicios (models.Model):

    cod_servicio = models.AutoField(primary_key=True)
    nombre_servicio = models.CharField(max_length=50, blank=False)
    descripcion_serv = models.CharField(max_length=400, blank=False)
    precio_kg_km = models.DecimalField(blank=False, decimal_places=2, max_digits=10)

    class Meta:
        db_table="servicios"
        verbose_name="Tabla de servicios"
        verbose_name_plural="Servicios"
    def __unicode__(self):
        return self.nombre_servicio
    def __str__(self):
        return self.nombre_servicio

class Transportista (models.Model):

    id_transportista = models.BigIntegerField(primary_key=True)
    sucursal = models.ForeingKey(Sucursal, to_field="id_sucursal", on_delete.CASCADE)
    nombre_transp = models.CharField(max_length=50, blank=False)
    email_transp = models.CharField(max_length=50, blank=False)
    horarios_transp = models.CharField(max_length=50, blank=False)
    tel_transp = models.BigIntegerField()

    class Meta:
        db_table="transportista"
        verbose_name="Tabla de transportista"
        verbose_name_plural="Transportistas"
    def __unicode__(self):
        return self.nombre_transp
    def __str__(self):
        return self.nombre_transp

class Administrativo (models.Model):

    id_administrador = models.BigIntegerField(primary_key=True)
    sucursal = models.ForeingKey(Sucursal, to_field="id_sucursal", on_delete.CASCADE)
    nombre_admin = models.CharField(max_length=50, blank=False)
    email_admin = models.CharField(max_length=50, blank=False)
    horarios_admin = models.CharField(max_length=50, blank=False)
    tel_admin = models.BigIntegerField()
    class Meta:
        db_table="administrativo"
        verbose_name="Tabla de administrativo"
        verbose_name_plural="Administrativos"
    def __unicode__(self):
        return self.nombre_admin
    def __str__(self):
        return self.nombre_admin