import { Component, OnInit} from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{


  // Formulario de nuevo usuario
  usuarioForm: FormGroup;
  userForm: boolean = false;

  usuarios: any; 


  // Consumo de la Api para ver usuarios
  constructor(private user: UsuariosService, 
            private formBuilder: FormBuilder,
            private communicationService: CommunicationService){

    // consumo de la Api para ver usuarios
    this.user.obtenerUsuarios().subscribe({
      next: (userData)=>{
        this.usuarios = userData;
      },
      error:(errorData)=>{
        console.error(errorData);
      }
    })
    
    
    // Validacion del formulario de nuevos usuarios
    this.usuarioForm = this.formBuilder.group({
      user: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
      email: ['',[Validators.required, Validators.email]] ,
      password: ['',[Validators.required,Validators.minLength(8)]],
      is_staff: ['',[Validators.required]],
    })
    
    
  }
  //Eliminar usuarios DELETE http 
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
  
  actualizarUsuarios() {
    this.user.obtenerUsuarios().subscribe({
      next: (userData) => {
        this.usuarios = userData;
      },
      error: (errorData) => {
        console.error(errorData);
      }
    });
  }


  

  ngOnInit(): void {
    this.communicationService.emitComponenteCargado();
  }

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
        this.actualizarUsuarios() // Limpiar el formulario después de enviarlo
        alert("¡Usuario creado con éxito!")
        this.usuarioForm.reset();
      },
      error => {
        // Manejar el error
        console.error(error);
      }
    );
  }
  eliminarUsuario(id: number) {
    this.user.eliminarUsuario(id).subscribe(
      (response) => {
        console.log(response);
        this.actualizarUsuarios();
        // Realizar cualquier acción adicional necesaria, como actualizar la lista de usuarios
      },
      (error) => {
        console.error(error);
      }
    );
  }
  modificarUsuario(id: number) {
    // Obtener el usuario actual a partir del id
    const usuarioActual = this.usuarios.find((usuario: any) => usuario.id === id);
  
    if (!usuarioActual) {
      return;
    }
  
    // Realizar cualquier lógica adicional para obtener los datos modificados del usuario
  
    // Llamar al servicio para modificar el usuario
    this.user.modificarUsuario(id, usuarioActual).subscribe(
      (response) => {
        console.log(response);
        this.actualizarUsuarios(); // Actualizar la lista de usuarios después de la modificación
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

