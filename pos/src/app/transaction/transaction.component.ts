import { Component, OnInit } from '@angular/core';


export interface Item {
  Product: string;
  Qty?: number;
  Cost: number;
  ID?: number;
 
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

 // ticket: Item[] = [];
  cartTotal = 0;
  cartNumItems = 0;

  ticket : Item[] = [    
      {
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
      },
      {
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
      },
      {
        "Product": "Product 1",
        "Qty": 2,
        "Cost": 200,        
        "ID": 0
      }    
  ]

  constructor() { }

  ngOnInit() {
   
  }

  syncTicket() {  }

  checkout() {  }
  clearCart() {}
  calculateTotal() {}
  subtractOne(item: Item) {}
  removeItem(item: Item) {}
  addItem(item: Item) {}


}
