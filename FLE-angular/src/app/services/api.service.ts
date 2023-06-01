import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:String = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  obtenerServicios():Observable <any>{
    return this.http.get(this.url + 'productos');
  }
}
