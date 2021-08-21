import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { verificationComponent } from '../verification-mail/verification_mail.component';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.scss']
})
export class UserSignComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(verificationComponent);
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
    })
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
    
  }

  onSubmit() { }

  signIn() {
    this.router.navigate(['user/login']);
  }

 

}
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener('click', ()=>{
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener('click', ()=>{
//     container.classList.remove("sign-up-mode");
// });

