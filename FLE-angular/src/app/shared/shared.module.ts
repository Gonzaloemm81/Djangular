import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent, FooterComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
