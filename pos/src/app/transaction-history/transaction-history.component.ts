import { Component, OnInit } from '@angular/core';

export interface Order {
  orderNumber: string;
  items?: Item[];
  cartTotal: number;
  cartNumItems?: number;
}

// export interface Item {
//   id?: number;
//   name: string;
//   price: number;
//   item_type: string;
//   img_name?: string;
//   img_url?: string;
//   quantity?: number;
// }

export interface Item {
  Product: string;
  Qty?: number;
  Cost: number;
  ID?: number;
 
}

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

 

    
order : Order[] = [
{
  "orderNumber":"1",
  "items" : [{
    "Product": "Product 1",
    "Qty": 2,
    "Cost": 200,        
    "ID": 0
  },
  {
    "Product": "Product 1",
    "Qty": 2,
    "Cost": 200,        
    "ID": 0
  }],
  "cartTotal" : 300,
  "cartNumItems": 3
}

];

 
  constructor() { }

  ngOnInit() {  }

  openDialog(lineItem: Order): void {  }

}
