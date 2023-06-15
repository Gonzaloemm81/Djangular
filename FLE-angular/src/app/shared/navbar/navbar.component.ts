import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { LoginStateService } from 'src/app/services/login-state.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  estado: any;

  currentUser=localStorage.getItem('currentUser');
  currentUserJSON :any;
  isStaffUser: boolean = true;


  constructor(private loginState: LoginStateService, private communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    
    this.communicationService.componenteCargado$.subscribe(() => {
    this.estado = this.loginState.getEstado();
    console.log(this.estado);
    // Lógica a ejecutar cuando se carga el otro componente
    console.log('El otro componente se ha cargado');
    this.currentUser=localStorage.getItem('currentUser');
    if(this.currentUser!=null) {
      this.currentUserJSON = JSON.parse(this.currentUser);
      this.isStaffUser = this.currentUserJSON.is_staff
    }});
    this.estado = this.loginState.getEstado();
    if(this.currentUser!=null) {
      this.currentUserJSON = JSON.parse(this.currentUser);
      this.isStaffUser = this.currentUserJSON.is_staff
  }

  
}

}