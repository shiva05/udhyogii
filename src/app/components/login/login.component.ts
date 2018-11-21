import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  Login(form: NgForm) {
    console.log(form.value);
  }
 
}
