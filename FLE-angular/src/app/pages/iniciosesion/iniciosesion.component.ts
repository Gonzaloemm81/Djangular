import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent implements OnInit{
  recordarme: boolean = false;
  iniciosesionForm: FormGroup
  constructor(private formBuilder: FormBuilder){
  this.iniciosesionForm = this.formBuilder.group({
    user:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],  
    password:['',[Validators.required, Validators.minLength(8)]],

})};

get User()
{
  return this.iniciosesionForm.get('user');
}
get Password()
{
  return this.iniciosesionForm.get('password');
}
onEnviar(event: Event)
{
  event.preventDefault();
  if (this.iniciosesionForm.valid)
  {
    alert('Enviando al servidor pa...')
    this.iniciosesionForm.reset()
  }
  else{
    this.iniciosesionForm.markAllAsTouched();
  }


}
ngOnInit(): void {}

}