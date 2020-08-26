import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private cartItems : CartItem[] = [];
  public cartTotal = new EventEmitter<{
    totalPrice: number, totalItemQty: number
  }>();

  constructor(){}

  public addToCart( name : string, quantity : number, price : number ){
      this.cartItems.push(new CartItem(name, quantity, price));
      this.updateTotal();
  }

  public removeCartItem(index: number) {
    if (this.cartItems[index]) {
      this.cartItems.splice(index, 1);
    }
  }

  private updateTotal() {
    const totalPrice = this.cartItems.reduce((prev: number, cur: any) => {
      return prev + cur.totalPrice;
    }, 0);
    const totalItemQty = this.cartItems.reduce((prev: number, cur: any) => {
      return prev + parseInt(cur['itemQty']);
    }, 0);
    this.cartTotal.emit({
      totalPrice: totalPrice,
      totalItemQty: totalItemQty
    })
  }

  get CartItems(): CartItem[] {
    return this.cartItems;
  }
}
