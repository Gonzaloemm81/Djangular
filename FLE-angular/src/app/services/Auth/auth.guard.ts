import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginStateService } from '../login-state.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    

    constructor(private authService: AuthService,
        private loginState: LoginStateService) {}
        
        canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable <boolean> {
             
            if(localStorage.getItem('currentUser') == null) { return of(false) }
            else{
                return of(true);
    }
    }
}