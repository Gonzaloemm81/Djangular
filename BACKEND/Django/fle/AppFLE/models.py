from django.db import models

# Create your models here.

# Clases creadas por Emiliano Ramírez
class Clientes(models.Model):

    id_cliente = models.BigIntegerField(primary_key=True)
    nombre_cliente = models.CharField(max_length=50, blank=False)
    direccion_cliente = models.CharField(max_length=255, blank=False)
    tel_cliente = models.BigIntegerField(blank=False)
    email_cliente = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table="clientes"
        verbose_name="Tabla de clientes"
        verbose_name_plural="Clientes"
    def __unicode__(self):
        return self.nombre_cliente
    def __str__(self):
        return self.nombre_cliente

class Destino(models.Model):

    cod_postal = models.IntegerField(primary_key=True)
    destinatario = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table="destino"
        verbose_name="Tabla de destino"
        verbose_name_plural="Destinos"
    def __unicode__(self):
        return self.destinatario
    def __str__(self):
        return self.destinatario

class Sucursal(models.Model):
    
    id_sucursal = models.BigIntegerField(primary_key=True)
    postal_cod = models.ForeignKey(Destino, to_field="cod_postal", on_delete=models.CASCADE)
    class Meta:
        db_table="sucursal"
        verbose_name="Tabla de sucursales"
        verbose_name_plural="Sucursales"
    def __unicode__(self):
        return self.postal_cod
    def __str__(self):
        return self.postal_cod

# Clases creadas por Diego Gutierrez

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
    sucursal = models.ForeignKey(Sucursal, to_field="id_sucursal", on_delete=models.CASCADE)
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
    sucursal = models.ForeignKey(Sucursal, to_field="id_sucursal", on_delete=models.CASCADE)
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

# Clases creadas por Leonel Rasjido
class Factura(models.Model):
    
    cod_factura= models.AutoField(primary_key=True)
    cliente_id = models.ForeignKey(Clientes, to_field="id_cliente", on_delete=models.CASCADE)
    emisor = models.ForeignKey(Administrativo, to_field="id_administrador", on_delete=models.CASCADE)
    precio_total = models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    class Meta:
        db_table="factura"
        verbose_name="Tabla de facturas"
        verbose_name_plural="Facturas"
    def __unicode__(self):
        return self.cod_factura
    def __str__(self):
        return self.cod_factura
    
class Carrito(models.Model):
    cod_pedido = models.BigIntegerField(primary_key=True)
    postal_cod = models.ForeignKey(Destino, to_field="cod_postal", on_delete=models.CASCADE)
    factura_cod = models.ForeignKey(Factura, to_field="cod_factura", on_delete=models.CASCADE)
    precio_pedido = models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    ubicacion_pedido = models.CharField(max_length=255, blank=False)
    class Meta:
        db_table="Carrito"
        verbose_name="Tabla de carrito"
        verbose_name_plural="Carritos"
    def __unicode__(self):
        return self.cod_pedido
    def __str__(self):
        return self.cod_pedido

class Paquetes(models.Model):

    cod_paquete = models.AutoField(primary_key=True)
    pedido_cod = models.ForeignKey(Carrito, to_field="cod_pedido", on_delete=models.CASCADE)
    servicio_cod = models.ForeignKey(Servicios, to_field="cod_servicio", on_delete=models.CASCADE)
    contenido = models.CharField(max_length=255, blank=False)
    peso = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    altura = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    ancho = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    largo = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    precio_paquete = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    class Meta:
        db_table="Paquete"
        verbose_name="Tabla de Paquetes"
        verbose_name_plural="Paquetes"
    def __unicode__(self):
        return self.cod_paquete
    def __str__(self):
        return self.cod_paquete

# Clases creadas por Brian Polo

class Vehiculos(models.Model):
    patente = models.CharField(max_length=8, primary_key=True)
    modelo_vehiculo = models.CharField(max_length=50, blank=False)
    ano_vehiculo = models.IntegerField(blank=False)
    class Meta:
        db_table = 'Vehiculos'
        verbose_name = 'tablaVehiculos'
        verbose_name_plural = 'tabla-de-Vehiculos'

    def __unicode__(self):
        return self.patente
    def __str__(self):
        return self.patente

class Paquete_Vehiculo(models.Model):
    cod_paquete = models.ForeignKey(Paquetes,to_field="cod_paquete", on_delete=models.CASCADE)
    patente = models.ForeignKey(Vehiculos,to_field="patente", on_delete=models.CASCADE)

    class Meta:
        db_table = 'Paquete_Vehiculo'
        verbose_name = 'paquetevehiculo'
        verbose_name_plural = 'paquete-vehiculos'

    def __unicode__(self):
        return self.patente + self.cod_paquete
    def __str__(self):
        return self.patente + self.cod_paquete

class Vehiculo_Conductor(models.Model):
    patente = models.ForeignKey(Vehiculos, to_field="patente", on_delete=models.CASCADE)
    transp_id = models.ForeignKey(Transportista, to_field="id_transportista", on_delete=models.CASCADE)
    class Meta:
        db_table = 'Vehiculo_Conductor'
        verbose_name = 'vehiculo-conductor'
        verbose_name_plural = 'vehiculos-conductores'

    def __unicode__(self):
        return self.patente + self.transp_id
    def __str__(self):
        return self.patente + self.transp_id

