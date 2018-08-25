import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {ItemsService} from '../items.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
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
export class CartComponent implements OnInit {
  Items:Item[]=[];
  constructor() {
    
  }

  ngOnInit() {
  }


}
