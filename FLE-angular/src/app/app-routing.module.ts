import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/Contacto/contacto.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import { UserComponent } from './dashboards/user/user.component';
import { AuthGuard } from './services/Auth/auth.guard';

const routes: Routes = [{
    component: RegistroComponent,
     path: 'registro'
},
{
    component: IniciosesionComponent,
    path: 'iniciosesion'
  },
  {
    component: ServiciosComponent,
    path: 'servicios'
  },
  {
    component: SeguimientoComponent,
    path: 'seguimiento'
  },
  {
    component: CalculadoraComponent,
    path: 'calculadora'
  },
  {
    component: FooterComponent,
    path: 'footer'
  },
  {
    component: CarritoComponent,
    path: 'carrito', canActivate: [AuthGuard]
  },
  {
    component: ContactoComponent,
    path: 'contacto'
  },
  {
    component: SucursalesComponent,
    path: 'sucursales'
  },
  {
    component: AdminComponent,
    path: 'admin', canActivate: [AuthGuard]
  },
  {
    component: UserComponent,
    path: 'user', canActivate: [AuthGuard]
  },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }