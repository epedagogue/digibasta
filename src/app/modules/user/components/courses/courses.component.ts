import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any =
    [
      { 'courseId': 1 ,  'courseName': 'Science', 'Quality': 1, 'price': '2000'  },
      { 'courseId': 2 , 'courseName': 'Maths', 'Quality': 1, 'price': '2000' },
      { 'courseId': 3 , 'courseName': 'English', 'Quality': 1, 'price': '2000' },
      { 'courseId': 4 , 'courseName': 'EVS', 'Quality': 1, 'price': '2000' },
      { 'courseId': 5 , 'courseName': 'Social Seience', 'Quality': 1, 'price': '2000'  },
      { 'courseId': 6 , 'courseName': 'Hindi',  'Quality': 1,'price' : '2000' },
      { 'courseId': 6 , 'courseName': 'Art', 'Quality': 1, 'price': '3000' },
      
    ];
  constructor( private cart : CartService ) { }

  ngOnInit(): void  {
  
   
  }
   itemsCart:any = [];
  addCart(course){
    console.log(course);
    let cartDataNull = localStorage.getItem('localcart');
    
    if(cartDataNull == null){
      let storeDataGet:any = [];
      storeDataGet.push(course);
      localStorage.setItem('localcart', JSON.stringify(storeDataGet));

    } 
    else {
      var id = course.courseId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localcart'));
     for(let i=0; i<this.itemsCart.length; i++){
        (parseInt(id)=== parseInt(this.itemsCart[i].courseId));

        
       }
      if(index == -1){
        this.itemsCart.push(course);
        localStorage.setItem('localcart', JSON.stringify(this.itemsCart));
      } else {
        localStorage.setItem('localcart', JSON.stringify(this.itemsCart));
      }

    }
    this.cartNumberFunc();
  }
   
   cartNumber:number = 0;
   cartNumberFunc(){
     var cartValue = JSON.parse(localStorage.getItem('localcart'));
   this.cartNumber =  cartValue.length;
   this.cart.cartSubject.next(this.cartNumber);
   console.log(this.cartNumber);
   }

}
