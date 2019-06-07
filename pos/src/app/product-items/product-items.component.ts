import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../shared/categories.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})

export class ProductItemsComponent implements OnInit {

  categories : any;
  products : any;

  name : string;
  tenantId : number;
  isActive : boolean;

  constructor(private categoriesService : CategoriesService,
              private route : Router) { }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getProducts() {
    this.categoriesService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      }
    )    
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      }
    )    
  }

  editItem(){
    

  }
}
