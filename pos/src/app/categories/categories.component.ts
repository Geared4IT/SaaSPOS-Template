import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../shared/categories.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories : any;
  name : string;
  tenantId : number;
  isActive : boolean;

  constructor(private categoriesService : CategoriesService,
            private route : Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      }
    )    
  }

  createCategory(name : string){
     this.categoriesService.createCategory(this.name = name , this.tenantId = 1 , this.isActive = true)
     .subscribe((data : any) => {
        this.getCategories();
     })
  }

  editItem(){
    this.categoriesService.createCategory(this.name = "gooodstufNiga" , this.tenantId = 1 , this.isActive = true)
    .subscribe((data : any) => {
       this.getCategories();
    })

  }

}
