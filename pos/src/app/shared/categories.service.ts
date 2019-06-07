import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {

  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:56250'; //web api 
  qns: any[];
  qnProgress: number;
  total: number;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) {
    
   }

   createCategory(name: string, tenantId: number, isActive : boolean) {
    var body = {
      Name: name,
      TenantId: tenantId,
      IsActive: isActive
    }
    return this.http.post(this.rootUrl + '/api/CreateCategory', body);
  }

  getCategoryForEdit(id: number , tenantId : number) {   
  }

  getCategories() {
    return this.http.get(this.rootUrl + '/api/GetCategories');
  }

  deleteCategory(id: number){}

  getProducts() {
    return this.http.get(this.rootUrl + '/api/GetProducts');
  }




}