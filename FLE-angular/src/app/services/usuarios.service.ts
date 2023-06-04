import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
url:String = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  obtenerUsuarios():Observable <any>{
    return this.http.get(this.url + 'api/usuarios/');
  }

   agregarUsuarios(data:any): Observable<any>{
     return this.http.post(this.url + 'api/usuarios/',data);
  }

  eliminarUsuario(id: number) {
    const apiUrl = `${this.url}api/usuarios/${id}/`;
    return this.http.delete(apiUrl);
  }
  modificarUsuario(id: number, usuario: any) {
    const apiUrl = `${this.url}api/usuarios/${id}/`;
    return this.http.put(apiUrl, usuario);
  }
}
