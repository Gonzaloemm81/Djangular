import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { AuthGuard } from './services/Auth/auth.guard';

import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    AppRoutingModule,
    DashboardsModule,
    SharedModule,
  ],
  providers: [AuthGuard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
