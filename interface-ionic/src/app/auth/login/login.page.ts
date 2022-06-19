import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthuService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;

  constructor(public authService: AuthuService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.authenticate(form.value.userEmail, form.value.userPassword);    
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.userEmail, form.value.userPassword);
    console.log(form.value);    
  }

}
