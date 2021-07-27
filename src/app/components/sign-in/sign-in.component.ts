import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private _service: UserService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    const userData = {
      mobileNo: '9711702404',
      password: 'pra23',
      userName: 'RB'
    }
    this._service.userSignIn(userData).subscribe(data => {
      console.log(data);
    })
  }

  signUp() {
    this.router.navigate(['/signUp']);
  }

}
