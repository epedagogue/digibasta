import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.cartDetails();
    this.totalAmount();
  }

  getCartDetails:any = [];

  cartDetails(){
    if(localStorage.getItem('localcart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localcart'));
      console.log(this.getCartDetails);
    } 
  }
  
  increaseQuality( cart){
    cart.Quality = cart.Quality + 1;
    
  }
  decreaseQuality( cart){
    cart.Quality = cart.Quality - 1;
   
  }

  total:number = 0;

  totalAmount(){
   if(localStorage.getItem("localcart")) {
     this.getCartDetails = JSON.parse(localStorage.getItem("localcart"));
     this.total = this.getCartDetails.reduce(function(acc ,  val){
       return acc + (val.price * val.Quality);
     },0 );

   }
  }

}
