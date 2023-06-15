import { Injectable } from '@angular/core'; 

import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Usuario } from '../usuario.class';
import { HttpClient } from '@angular/common/http';
import { LoginStateService } from '../login-state.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:String = 'http://localhost:8000/'

  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private http:HttpClient,
              private loginState:LoginStateService) {
    console.log('Servicio de Autenticacion esta corriendo');

    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));

    this.currentUser = this.currentUserSubject.asObservable();
   }

   login(usuario:Usuario): Observable<any>{
    return this.http.post<any>(this.url+'api/auth/login/', usuario)
    .pipe(map(data=>
      {
        localStorage.setItem('currentUser', JSON.stringify(data));

        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        return data;
      }))
    }
    
    logout():void{
      localStorage.removeItem('currentUser');
      this.loggedIn.next(false);
      this.loginState.cambiarEstado(true);
      console.log(this.loginState.state);
      alert("anda")
   }

   get usuarioAutenticado(): Usuario{
    return this.currentUserSubject.value;
   }

   get estaAutenticado(): Observable<boolean>{
    return this.loggedIn.asObservable();
   }

}
