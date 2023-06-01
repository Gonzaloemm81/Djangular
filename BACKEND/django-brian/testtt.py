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
    cod_paquete = models.ForeingKey(Paquetes,to_field="cod_paquete", on_delete=models.CASCADE)
    patente = models.ForeingKey(Vehiculos,to_field="patente", on_delete=models.CASCADE)

    class Meta:
        db_table = 'Paquete_Vehiculo'
        verbose_name = 'paquetevehiculo'
        verbose_name_plural = 'paquete-vehiculos'

    def __unicode__(self):
        return self.patente + self.cod_paquete
    def __str__(self):
        return self.patente + self.cod_paquete

class Vehiculo_Conductor():
    patente = models.ForeingKey(Vehiculos, to_field="patente", on_delete=models.CASCADE)
    transp_id = models.ForeingKey(Transportista, to_field="id_transportista", on_delete=models.CASCADE)
    class Meta:
        db_table = 'Vehiculo_Conductor'
        verbose_name = 'vehiculo-conductor'
        verbose_name_plural = 'vehiculos-conductores'

    def __unicode__(self):
        return self.patente + self.transp_id
    def __str__(self):
        return self.patente + self.transp_id
