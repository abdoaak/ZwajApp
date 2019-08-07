import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService, private router:Router, private alertify:AlertifyService) {
   
    
  }
  canActivate(): boolean {
    if(this.authservice.loggedIN()){

      return true;
    }
    this.alertify.error('needs logging');
    this.router.navigate(['']);
    return false;
  }
}
