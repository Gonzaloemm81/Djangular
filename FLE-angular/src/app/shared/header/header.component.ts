import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginStateService } from 'src/app/services/login-state.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  estado: any;

  constructor(private authService: AuthService, private loginState: LoginStateService, private communicationService: CommunicationService,private router: Router) {}

  ngOnInit(): void {

    if(localStorage.getItem('currentUser') == null) { this.loginState.cambiarEstado(true)}
    else{
      this.loginState.cambiarEstado(false);
    }

    this.estado = this.loginState.getEstado();
    
    this.communicationService.componenteCargado$.subscribe(() => {
    this.estado = this.loginState.getEstado();
    console.log(this.estado);
    // Lógica a ejecutar cuando se carga el otro componente
    console.log('El otro componente se ha cargado');
  });
  
}

  logout(): void {
    this.authService.logout();
    this.estado = this.loginState.state;
    console.log(this.estado);
    window.location.reload();
    
  }
}
