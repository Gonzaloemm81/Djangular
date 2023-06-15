import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent implements OnInit {

  
  
  recordarme: boolean = false;
  
  iniciosesionForm: FormGroup
  

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService, 
              private router: Router,
              private loginState: LoginStateService) {
    this.iniciosesionForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],

    })
  };

  ngOnInit(): void { 
    
  }
  get Mail(){
    return this.iniciosesionForm.get('mail');
  }
  get User() {
    return this.iniciosesionForm.get('user');
  }
  get Password() {
    return this.iniciosesionForm.get('password');
  }

  
  onEnviar(event: Event): void {
     
    const nuevoUsuario = {
      email: this.iniciosesionForm.value.email,
      password: this.iniciosesionForm.value.password,
      is_staff: Boolean
    }
    event.preventDefault();
    
    this.authService.login(nuevoUsuario).subscribe(
      data => {
        console.log('DATA' + JSON.stringify(data));
        this.loginState.cambiarEstado(false);
        console.log(this.loginState.state);
        alert("gil")
        if (data.is_staff){
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/user']);
        }
        
      },
      error => {
        alert("Ingrese un usuario y contraseña válidos.");
        console.log(error);
      }

    )

  }
}