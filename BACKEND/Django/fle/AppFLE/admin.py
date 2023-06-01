from django.contrib import admin
from .models import *

# Register your models here.
class ClientesAdmin(admin.ModelAdmin):
    list_display = ("id_cliente","nombre_cliente","direccion_cliente","tel_cliente","email_cliente")
class DestinoAdmin(admin.ModelAdmin):
    list_display = ( "cod_postal", "destinatario" )
class SucursalAdmin(admin.ModelAdmin):
    list_display = ( "id_sucursal","postal_cod")
class ServiciosAdmin(admin.ModelAdmin):
    list_display = ( "cod_servicio","nombre_servicio","descripcion_serv","precio_kg_km")
class TransportistaAdmin(admin.ModelAdmin):
    list_display = ( "id_transportista","sucursal","nombre_transp", "email_transp","horarios_transp","tel_transp")
class AdministrativoAdmin(admin.ModelAdmin):
    list_display = ( "id_administrador","sucursal","nombre_admin","email_admin","horarios_admin","tel_admin")
class FacturaAdmin(admin.ModelAdmin):
    list_display = ( "cod_factura","cliente_id","emisor","precio_total")
class CarritoAdmin(admin.ModelAdmin):
    list_display = ("cod_pedido","postal_cod","factura_cod","precio_pedido","ubicacion_pedido")
class PaquetesAdmin(admin.ModelAdmin):
    list_display = ("cod_paquete","pedido_cod","servicio_cod","contenido","peso","altura","ancho","largo","precio_paquete")
class VehiculosAdmin(admin.ModelAdmin):
    list_display = ( "patente","modelo_vehiculo","ano_vehiculo")
class Paquete_VehiculoAdmin(admin.ModelAdmin):
    list_display = ("cod_paquete","patente")
class Vehiculo_ConductorAdmin(admin.ModelAdmin):
    list_display= ("patente","transp_id")

admin.site.register(Clientes,ClientesAdmin)
admin.site.register(Destino,DestinoAdmin)
admin.site.register(Sucursal,SucursalAdmin)
admin.site.register(Servicios,ServiciosAdmin)
admin.site.register(Transportista,TransportistaAdmin)
admin.site.register(Administrativo,AdministrativoAdmin)
admin.site.register(Factura,FacturaAdmin)
admin.site.register(Carrito,CarritoAdmin)
admin.site.register(Paquetes,PaquetesAdmin)
admin.site.register(Vehiculos,VehiculosAdmin)
admin.site.register(Paquete_Vehiculo,Paquete_VehiculoAdmin)
admin.site.register(Vehiculo_Conductor,Vehiculo_ConductorAdmin)