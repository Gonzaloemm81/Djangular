import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:any;
  

  constructor(private communicationService: CommunicationService){}

  ngOnInit() {
    this.communicationService.emitComponenteCargado();
    if(localStorage.getItem('currentUser')!==null){
    this.user = localStorage.getItem('currentUser')
    this.user = JSON.parse(this.user);
  }}


}
