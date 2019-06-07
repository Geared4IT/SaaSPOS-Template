import { Component, OnInit } from '@angular/core';

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
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html',
  styleUrls: ['./point-of-sale.component.css']
})
export class PointOfSaleComponent implements OnInit {

  products =      [
    [
      {
        "Name": "Product 1",
        "Details": "Lorum Ipsum lorum ipsum 1",
        "Cost": 200,
        "Function": "Engineering",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 0
      },
      {
        "Name": "Product 2",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 1
      },
      {
        "Name": "Product 3",
        "Details": "Lorum Ipsum lorum ipsum 1",
        "Cost": 500,
        "Function": "Engineering",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 2
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 3
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 3
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 3
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 3
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 120,
        "Function": "Healthcare",
        "Type": "Lamb Curry",
        "Img_url" : "http://placekitten.com/200/300",
        "ID": 3
      }

    ],
    [
      {
        "Name": "Product 3",
        "Details": "Lorum Ipsum lorum ipsum 1",
        "Cost": 300,
        "Function": "Lamb Curry",
        "Type": "Tablet",
        "ID": 0
      },
      {
        "Name": "Product 4",
        "Details": "Lorum Ipsum lorum ipsum 2",
        "Cost": 520,
        "Function": "Healthcare",
        "Type": "Tablet",
        "ID": 1
      }
    ],
    [
      {
        "Name": "Product 5",
        "Details": "Lorum Ipsum lorum ipsum 3",
        "Cost": 30,
        "Function": "Lamb Curry",
        "Type": "Desktop",
        "ID": 2
      }
    ]
  ]
productTypes = [
          {id: 1 , name: 'Lamb Curry'}, 
          {id: 2 , name: 'Tablet'},
          {id: 3 , name: 'Desktop'}
        ];

ticket: Item[];
cartTotal = 0;
cartNumItems = 0;
items;

constructor() { }

ngOnInit() {
// this.products[0] =  [{Type:"Tablet",Name:'whiskey',Cost:100];// img_url:'assets/img/logo.png'}]
// this.products[1] = this.db.getFood();
}


}
