import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { SchoolService } from '../services/school.service';

import { School } from '../model/school';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  school: School;

  constructor(private authService: AuthService, 
              private schoolService: SchoolService, 
              private router: Router) {
    this.school = new School();
    console.log('BEFORE');
    this.schoolService.get('1').subscribe(
      res => {this.school = res; console.info("AKIIII",this.school);}
    );
  }

  ngOnInit() {    
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

  updateSchool(){
    console.info("UPDATE", this.school);
    this.schoolService.update('1', this.school).subscribe(
      (res: any) => console.info("UPDATED", res)
    );
  }

}
