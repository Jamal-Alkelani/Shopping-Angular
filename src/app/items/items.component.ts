import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  animations:[
    trigger('fuck',[
      transition("* => *",[
        query(':enter',style({opacity:0}),{optional:true}),

        query(':enter',stagger('300ms',[
          animate('0.6s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset:0}),
            style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
          ]))]),{optional:true}),

          query(':leave',stagger('300ms',[
            animate('0.6s ease-in',keyframes([
              style({opacity:1,transform:'translateY(0)',offset:0}),
              style({opacity:0.5,transform:'translateY(-50px)',offset:0.3}),
              style({opacity:0,transform:'translateY(-75%)',offset:1}),
            ]))]),{optional:true})
      ])
    ]),

  ]
})
export class ItemsComponent implements OnInit {

  Items:Item[]=[
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
    {
      name:'Canon 6D',
      price:850,
      id:'123',
      imageUrl:'http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png',
      Category:'Camera',
    },
  ];

  constructor() { }

  ngOnInit() {
    
  }

  getItems(){
    return this.Items;
  }

  // addItemToCart(item:Item){
  //   this.itemsSerivce.getItemsCart().push(item);
  // }

}
