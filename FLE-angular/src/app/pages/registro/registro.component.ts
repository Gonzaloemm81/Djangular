import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario2Service, Usuario } from 'src/app/services/usuario2.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  form: FormGroup;
  usuario:Usuario = new Usuario();

  constructor(private formbuilder:FormBuilder, private usuario2Service:Usuario2Service, private router:Router){
    this.form = this.formbuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      dni:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]],
      password1:['',[Validators.required]],
      password2:['',[Validators.required]],
      email:['',[Validators.required]],})
    }





ngOnInit(): void {}
onEnviar(event:Event, usuario:Usuario): void{
  event.preventDefault;

  if (this.form.valid){
    console.log("Enviando al servidor...");
    console.log(usuario);
    this.usuario2Service.onCrearUsuario(usuario).subscribe(
      data=> {
        console.log(data.id);
        if (data.id>0){
          alert('El registro ha sido creado satisfactoriamente. A continuacion, por favor inicie sesion.');
          this.router.navigate(['/iniciosesion']);
        }
      })
  }
  else{
    this.form.markAllAsTouched();
  }
};

get Password1(){
  return this.form.get('password1');
}
get Password2(){
  return this.form.get('password2');
}

get Mail(){
  return this.form.get('email');
}

get Nombre(){
  return this.form.get('nombre');
}

get Apellido(){
  return this.form.get('apellido');
}

get FechaNacimiento(){
  return this.form.get('fechaNacimiento');
}

get Dni(){
  return this.form.get('dni');
}

get MailValid(){
  return this.Mail?.touched && !this.Mail?.valid;
}

get NombreValid(){
  return this.Nombre?.touched && !this.Nombre?.valid;
}
get ApellidoValid(){
  return this.Apellido?.touched && !this.Apellido?.valid;
}

get Password1Valid(){
  return this.Password1?.touched && !this.Password1?.valid;
}

get Password2Valid(){
  return this.Password2?.touched && !this.Password2?.valid;
}

get FechaNacimientoValid(){
  return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
}

get DniValid(){
  return this.Dni?.touched && !this.Dni?.valid;
}


}
