import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminComponent
  ]
})
export class DashboardsModule { }
