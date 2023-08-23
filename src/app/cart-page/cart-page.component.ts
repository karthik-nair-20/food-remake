import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService:CartService){
    this.setcart();
  }

  setcart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.fo0d.id);
    this.setcart();
  }
  ngOnInit(): void {
    
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.fo0d.id, quantity);
    this.setcart();
  }
}
