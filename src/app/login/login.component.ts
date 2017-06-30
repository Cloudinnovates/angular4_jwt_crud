import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  login(){    
    this.authService.login(this.email, this.password).subscribe((data) => {
      if(this.authService.loggedIn()){
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pages';
        this.router.navigate([redirect]);
      }
    });
    
  }

}
