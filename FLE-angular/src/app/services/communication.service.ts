import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private componenteCargadoSource = new Subject<void>();

  componenteCargado$ = this.componenteCargadoSource.asObservable();

  emitComponenteCargado() {
    this.componenteCargadoSource.next();
  }
}