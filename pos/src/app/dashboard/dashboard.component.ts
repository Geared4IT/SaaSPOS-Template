import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Item {
  id?: number;
  name: string;
  price: number;
  item_type: string;
  img_name?: string;
  img_url?: string;
  quantity?: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [`
  .header {  
    text-align: center;
    text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
    color: #fff;
    opacity: 0.4;
    font: 700 22px 'Bitter';
    font-family: cursive!important;
    font-size: inherit;
    
  }
  `]
})
export class DashboardComponent implements OnInit {

  infoCards = [
    {name: 'POINT OF SALE ', value: '3204' , description :'Process POS transactions' , path: '/point-of-sale' , icon : 'add_shopping_cart' , bgcolor : 'font-blue-dark'},
    {name: 'CATEGORIES', value: '02345' , description :'Manage Product Categories' , path: '/categories', icon : '3d_rotation' , bgcolor : 'font-green-turquoise' },
    {name: 'PRODUCTS', value: '0654' , description :'Manage Products' , path: '/product', icon : 'settings_cell' , bgcolor : 'font-red-sunglo' },
    {name: 'USERS', value: '0654' , description :'Manage Users and Rights' , path: '/users', icon : 'perm_contact_calendar' , bgcolor : 'font-green-meadow'},
    {name: 'REPORTS', value: '0654' , description :'View  Real time and Auditing Reports', path: '/reports', icon : 'store' , bgcolor : 'font-green-soft'},
    {name: 'PAYMENTS', value: '0654' , description :'Manage Payments', path: '/payment', icon : 'payment' , bgcolor : 'font-green-jungle'}
  ];
 
  constructor() { }

  ngOnInit() {
  
  }

}
