import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddToCartService } from '../../services/addtocart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('itemname') itemname: ElementRef;
  @ViewChild('itemqty') itemqty: ElementRef;
  @ViewChild('itemprice') itemprice: ElementRef;

  constructor(private addToCartServiceImpl : AddToCartService) { }

  ngOnInit(): void {
  }

  updateCart( name : string, quantity : number, price : any ){
    this.addToCartServiceImpl.addToCart(name, quantity, price);
    this.clearForm();
  }

  clearForm() {
    this.itemname.nativeElement.value = '';
    this.itemqty.nativeElement.value = '';
    this.itemprice.nativeElement.value = '';
  }


}
