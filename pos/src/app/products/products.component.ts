import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../shared/categories.service';
import {Router } from '@angular/router';

export interface Item {
  ProductId: number;
  Name: string;
  Cost: number;
  CategoryId: number;
  Comment: string;
  IsActive: boolean;
  TenantId: number;
  Image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

        categories = []; //object
        products:Item[] = [];

        name : string;
        tenantId : number;
        isActive : boolean;

constructor(private categoriesService : CategoriesService,
            private route : Router) { }

ngOnInit() { 
    this.getCategories();     
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
      this.getProducts();
    }
  )    
}

}
