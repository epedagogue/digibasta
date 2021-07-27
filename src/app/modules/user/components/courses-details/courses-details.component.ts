import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoPreviewComponent } from '../video-preview/video-preview.component';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {

  // url = 'https://www.youtube.com/watch?v=d1vWH_2yVl4';
  courses = [
    {
      id: 1,
      chapter: '1',
      name: 'ice-cream man1',
      topics: [{
        name: 'ice-cream man',
        part: '1',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      }, {
        name: 'ice-cream man',
        part: '2',
        url: 'https://www.youtube.com/watch?v=V0mIXEbB3eY'
      },{
        name: 'ice-cream man',
        part: '3',
        url: 'https://www.youtube.com/watch?v=IwWMEmTKgx0&t'
      },{
        name: 'ice-cream man',
        part: '4',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      }]
    }, {
      id: 2,
      chapter: '2',
      name: 'ice-cream man2',
      topics: [{
        name: 'ice-cream man',
        part: '1',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      },{
        name: 'ice-cream man',
        part: '2',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      },{
        name: 'ice-cream man',
        part: '3',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      }]
    }, {
      id: 3,
      chapter: '3',
      name: 'ice-cream man3',
      topics: [{
        name: 'ice-cream man',
        part: '1',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      },{
        name: 'ice-cream man',
        part: '2',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      }]
    }, {
      id: 4,
      chapter: '4',
      name: 'ice-cream man4',
      topics: [{
        name: 'ice-cream man',
        part: '4',
        url: 'https://www.youtube.com/watch?v=d1vWH_2yVl4'
      }]
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  open(link: any) {
    console.log(link);
    const dialogRef = this.dialog.open(VideoPreviewComponent, {
      data: { name: link }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


