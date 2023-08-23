import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Cart } from 'src/app/shared/model/cart';
import { CartItem } from 'src/app/shared/model/cartItem';
import { Food } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  // constructor(private cart:Cart) { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.fo0d.id === food.id);
    if(cartItem)
    {
      this.changeQuantity(food.id , cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodID:number):void{
    this.cart.items = this.cart.items.filter(item => item.fo0d.id !== foodID);
  }

  changeQuantity(foodID:number , quantity:number)
  {
    let cartItem = this.cart.items.find(item => item.fo0d.id ===foodID);
    if(!cartItem)
    {
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
