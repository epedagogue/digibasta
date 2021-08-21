import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cart : CartService) {
    this.cart.cartSubject.subscribe((data)=>{
      this.cartItem = data;

    });
   }

  ngOnInit(): void {
    this.cartItems();
  }
  cartItem:number = 0;

  cartItems(){
    if(localStorage.getItem('localcart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localcart'));
      this.cartItem = cartCount.length;
      
    }
  }

}
