class Factura(models.Model):
    
    cod_factura= models.AutoField(primary_key=True)
    cliente_id = models.ForeingKey(Clientes, to_field="id_cliente", on_delete=models.CASCADE)
    emisor = models.ForeingKey(Administrativo, to_field="id_administrador", on_delete=models.CASCADE)
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
    postal_cod = models.ForeingKey(Destino, to_field="cod_postal", on_delete=models.CASCADE)
    factura_cod = models.ForeingKey(Factura, to_field="cod_factura", on_delete=models.CASCADE)
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

class Paquete(models.Model):

    cod_paquete = models.AutoField(primary_key=True)
    pedido_cod = models.ForeingKey(Pedidos, to_field="cod_pedido", on_delete=models.CASCADE)
    servicio_cod = models.ForeingKey(Servicios, to_field="cod_servicio", on_delete=models.CASCADE)
    contenido = models.CharField(max_length=255, blank=False)
    peso = models.DecimalField(max_length=10, blank=False, decimal_places=2)
    altura = models.DecimalField(max_length=10, blank=False, decimal_places=2)
    ancho = models.DecimalField(max_length=10, blank=False, decimal_places=2)
    largo = models.DecimalField(max_length=10, blank=False, decimal_places=2)
    precio_paquete = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    class Meta:
        db_table="Paquete"
        verbose_name="Tabla de Paquetes"
        verbose_name_plural="Paquetes"
    def __unicode__(self):
        return self.cod_paquete
    def __str__(self):
        return self.cod_paquete

