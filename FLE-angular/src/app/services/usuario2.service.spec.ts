import { TestBed } from '@angular/core/testing';

import { Usuario2Service } from './usuario2.service';

describe('Usuario2Service', () => {
  let service: Usuario2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuario2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
