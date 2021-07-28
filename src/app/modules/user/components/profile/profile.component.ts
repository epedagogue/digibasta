import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'date', 'courseName', 'total', 'status', 'action'];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {
 
  }
  url = "./assets/person.jpg";
  onSelectFile(e){
      if(e.target.file){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.file[0])
        reader.onload=(event:any)=>{
          this.url=event.target.result;
        }
      }
  }

}
