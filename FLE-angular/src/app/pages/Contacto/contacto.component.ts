import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: any;

    constructor(private formBuilder: FormBuilder){
      this.form= this.formBuilder.group(
        {
          motivo:['',[Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
          nombre:['',[Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
          mail:['',[Validators.required, Validators.email]],
          mensaje:['',[Validators.required, Validators.maxLength(255), Validators.minLength(5)]]
        })};
      
      get Motivo(){return this.form.get('motivo');}
      get Nombre(){return this.form.get('nombre');}
      get Mail(){return this.form.get('mail');}
      get Mensaje(){return this.form.get('mensaje')}
      onEnviar(event: Event){
        event.preventDefault;
        if (this.form.valid) {alert ("Enviando al servidor...")}
        else{this.form.markAllAsTouched();}
      }
  ngOnInit(): void{}
}