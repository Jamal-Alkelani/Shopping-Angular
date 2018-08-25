import { Injectable } from '@angular/core';
import {ItemsComponent} from './items/items.component';
import {CartComponent} from './cart/cart.component';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private itemsComp:ItemsComponent,private CartComp:CartComponent) { }


  // getItems(){
  //   this.itemsComp.getItems();
  // }

  changeItems(item){
 
  }

  // getItemsCart(){
  //   return this.CartComp.Items;
  // }
}
