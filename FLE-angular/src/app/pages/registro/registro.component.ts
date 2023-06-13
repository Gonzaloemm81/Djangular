import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/services/usuarios.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
    // Formulario de nuevo usuario
    usuarioForm: FormGroup;
    userForm: boolean = false;
  
    usuarios: any; 
  
    constructor(private user: UsuariosService, 
      private formBuilder: FormBuilder,
      private router: Router){


// Validacion del formulario de nuevos usuarios
this.usuarioForm = this.formBuilder.group({
user: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
email: ['',[Validators.required, Validators.email]] ,
password: ['',[Validators.required,Validators.minLength(8)]],
is_staff: ['',[Validators.required]],
})


}

get User(){
  return this.usuarioForm.get('user');
}
get Email(){
  return this.usuarioForm.get('email');
}
get Password(){
  return this.usuarioForm.get('password');
}

abrirForm(){
  this.userForm = !this.userForm
}





ngOnInit(): void {}


agregarUsuario() {
  if (this.usuarioForm.invalid) {
    this.usuarioForm.markAllAsTouched(); // Clear
    return;
  }

  const nuevoUsuario = {
    username: this.usuarioForm.value.user,
    email: this.usuarioForm.value.email,
    password: this.usuarioForm.value.password,
    is_staff: this.usuarioForm.value.is_staff // Cambia esto según la selección del usuario en el formulario
  };

  this.user.agregarUsuarios(nuevoUsuario).subscribe(
    response => {
      // Manejar la respuesta exitosa
      console.log(response);
      alert("¡Usuario creado con éxito!")
      this.usuarioForm.reset();
      this.router.navigate(['/iniciosesion'])
      

    },
    error => {
      // Manejar el error
      console.error(error);
    }
  );
}

// onEnviar(event:Event, usuario:Usuario): void{
//   event.preventDefault;

//   if (this.form.valid){
//     console.log("Enviando al servidor...");
//     console.log(usuario);
//     this.usuario2Service.onCrearUsuario(usuario).subscribe(
//       data=> {
//         console.log(data.id);
//         if (data.id>0){
//           alert('El registro ha sido creado satisfactoriamente. A continuacion, por favor inicie sesion.');
//           this.router.navigate(['/iniciosesion']);
//         }
//       })
//   }
//   else{
//     this.form.markAllAsTouched();
//   }
// };

// get Password1(){
//   return this.form.get('password1');
// }
// get Password2(){
//   return this.form.get('password2');
// }

// get Mail(){
//   return this.form.get('email');
// }

// get Nombre(){
//   return this.form.get('nombre');
// }

// get Apellido(){
//   return this.form.get('apellido');
// }

// get FechaNacimiento(){
//   return this.form.get('fechaNacimiento');
// }

// get Dni(){
//   return this.form.get('dni');
// }

// get MailValid(){
//   return this.Mail?.touched && !this.Mail?.valid;
// }

// get NombreValid(){
//   return this.Nombre?.touched && !this.Nombre?.valid;
// }
// get ApellidoValid(){
//   return this.Apellido?.touched && !this.Apellido?.valid;
// }

// get Password1Valid(){
//   return this.Password1?.touched && !this.Password1?.valid;
// }

// get Password2Valid(){
//   return this.Password2?.touched && !this.Password2?.valid;
// }

// get FechaNacimientoValid(){
//   return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
// }

// get DniValid(){
//   return this.Dni?.touched && !this.Dni?.valid;
// }


}
