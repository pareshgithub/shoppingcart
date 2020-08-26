import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { AddToCartService } from '../../services/addtocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice = 0;
  totalItemQty = 0;
  constructor(private addToCartServiceImpl : AddToCartService) { }

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.addToCartServiceImpl.CartItems || [];
    console.log(this.cartItems)
    this.updateCartTotal();
  }

  updateCartTotal() {
    this.addToCartServiceImpl.cartTotal.subscribe((data: {
      totalPrice: number,
      totalItemQty: number
    }) => {
      this.totalPrice = data.totalPrice || 0;
      this.totalItemQty = data.totalItemQty || 0;
    })
  }

  removeItem(index: number) {
    this.addToCartServiceImpl.removeCartItem(index);
  }
  
  

}
