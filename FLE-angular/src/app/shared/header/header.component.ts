import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  estado : any;

  constructor(private authService: AuthService){}
  
  
  ngOninit(): void {}
  
  logout(){
    this.authService.logout();
    this.estado = this.authService.loggedIn;
}

}
