import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  state=true;
  
  constructor() {
  }
  
  ngOnInit() :void{
    
  }
  cambiarEstado(state: boolean): void{
    this.state = state; 
  }

  getEstado(){
    return this.state;
  }

}
