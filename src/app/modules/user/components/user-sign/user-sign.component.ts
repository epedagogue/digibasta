import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.scss']
})
export class UserSignComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      password: new FormControl('')
    })
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

