import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SetpasswordComponent } from '../setpassword/setpassword.component';

@Component({
  selector: 'app-verfication-otp',
  templateUrl: './verfication-otp.component.html',
  styleUrls: ['./verfication-otp.component.scss']
})
export class VerficationOtpComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

 

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(SetpasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
