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

  eliminarUsuarios(id:number): Observable<any>{
    return this.http.delete(this.url + 'api/usuarios/'+id)
  }
}
