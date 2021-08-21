import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VerficationOtpComponent } from '../verfication-otp/verfication-otp.component';

@Component({
  selector: 'app-verification_mail',
  templateUrl: './verification_mail.component.html',
  styleUrls: ['./verification_mail.component.scss']
})
export class verificationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(VerficationOtpComponent);
  }

  ngOnInit(): void {
  }


}
