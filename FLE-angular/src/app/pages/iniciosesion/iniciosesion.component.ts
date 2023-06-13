import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Usuario } from 'src/app/services/usuario.class';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent implements OnInit {
  recordarme: boolean = false;
  iniciosesionForm: FormGroup
  usuario: Usuario = new Usuario();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.iniciosesionForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
      mail: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    })
  };


  ngOnInit(): void { }
  get User() {
    return this.iniciosesionForm.get('user');
  }
  get Password() {
    return this.iniciosesionForm.get('password');
  }
  onEnviar(event: Event, usuario: Usuario): void {
    event.preventDefault();
    this.authService.login(this.usuario).subscribe(
      data => {
        console.log('DATA' + JSON.stringify(data));

        this.router.navigate(['/calculadora'])
        
      },
      error => {
        alert("puto")
        console.log(error);
      }

    )

  }
}