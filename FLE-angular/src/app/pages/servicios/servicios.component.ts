import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  serv:any;

  constructor(private api: ApiService){

  this.api.obtenerServicios().subscribe({
    next: (apiData)=>{
      this.serv = apiData;
    },
    error:(errorData)=>{
      console.error(errorData);
    }
  })

}
  ngOnInit(): void {
  }
}

