import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PagesModule } from "../pages/pages.module";


@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        InicioComponent
    ],
    exports: [
        HeaderComponent, FooterComponent,
        NavbarComponent, InicioComponent
    ],
    imports: [
        CommonModule,
        PagesModule
    ]
})
export class SharedModule { }
