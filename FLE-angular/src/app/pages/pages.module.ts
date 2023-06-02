import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './Contacto/contacto.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent,
    IniciosesionComponent,
    SeguimientoComponent,
    CalculadoraComponent,
    CarritoComponent,
    ContactoComponent,
    SucursalesComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent,
    IniciosesionComponent,
    SeguimientoComponent,
    CalculadoraComponent,
    CarritoComponent,
    ContactoComponent,
    SucursalesComponent,
    

  ]
})
export class PagesModule { }