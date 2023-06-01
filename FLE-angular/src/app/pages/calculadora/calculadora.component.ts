import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent implements OnInit{
 
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      peso:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      tipodeenvio:['', [Validators.required]],
      salida:['', [Validators.required]],
      destino:['', [Validators.required]],
      precio:['', [Validators.required, Validators.pattern('^[0-9]+$'
      )]],
      
    })

   }
   get Peso()
   {
     return this.form.get("peso");
   }
   get Tipodeenvio()
   {
     return this.form.get("tipodeenvio");
   }
   get Salida()
   {
     return this.form.get("salida");
   }
   get Destino()
   {
     return this.form.get("destino");
   }
   get Precio()
   {
     return this.form.get("precio");
   }
   onEnviar(event:Event)
{
  event.preventDefault;
  if(this.form.valid)

  
  {
    alert('¡El calculo se ha realizado con éxito!.')
    this.form.reset()
  }
  else
  {
    this.form.markAllAsTouched();
  }
}
  ngOnInit(): void {
    
  }

}
