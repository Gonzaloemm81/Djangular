import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private communicationService: CommunicationService){}

  ngOnInit() {
    this.communicationService.emitComponenteCargado();
  }


}
