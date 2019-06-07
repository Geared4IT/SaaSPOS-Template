import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:56250'; //web api 
  qns: any[];
  qnProgress: number;
  total: number;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) {
    
   }

  getUserName() {
    var user = JSON.parse(localStorage.getItem('user'));
    return user.Name;
  }

  validateTenant(name: string, email: string){
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/ValidateTenant', body);
  }

  insertUser(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertUser', body);
  }

  getItems() {
    return this.http.get(this.rootUrl + '/api/Shop');
  }

  setTotal(newtotal){
    localStorage.setItem('total', JSON.stringify(newtotal));
  }

  getTotal(){
    var grandtotal = JSON.parse(localStorage.getItem('total')).toString();
    return grandtotal;
  }


/*categories*/

/*products*/


}