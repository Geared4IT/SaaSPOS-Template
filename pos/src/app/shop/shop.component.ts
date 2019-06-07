import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../shared/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private shopService : ShopService,private route : Router) { }

  ngOnInit() {
    this.shopService.setTotal(0);
    this.shopService.total = 0.00;
    localStorage.setItem('total', JSON.stringify(0));
    this.shopService.getItems().subscribe(
      (data: any) => {
        this.shopService.qns = data;
      }
    ); 
  }

  AddItem(Item_ID, Cost){
    var total = JSON.parse(localStorage.getItem('total'));
    var newtotal = total + Cost;
    this.shopService.setTotal(newtotal);
    this.shopService.total = newtotal;
  };

  Checkout(){
    this.route.navigate(['/checkout']);
  }
}
