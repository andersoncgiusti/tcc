import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthuService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isLoading = false;

  constructor(public authService: AuthuService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.userEmail, form.value.userPassword);
    console.log(form.value);   
    
  }

}
