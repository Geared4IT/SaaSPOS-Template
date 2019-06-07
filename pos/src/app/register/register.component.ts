import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isRegistered = true;
  constructor(private shopService : ShopService,private route : Router) { }

  ngOnInit() {
  }

  OnSubmit(name:string,email:string){
    
    /** check tenant exists ***/
    this.shopService.validateTenant(name, email).subscribe(
      (data: any) => {

        this.route.navigate(['/dashboard']);
        return;
        if(data.TenantId !== 0){//nigga exists
             localStorage.clear();
             localStorage.setItem('user',JSON.stringify(data));
             //this.route.navigate(['/shop']);
            this.route.navigate(['/dashboard']);
           // this.route.navigate(['/point-of-sale']);
        }else{
            
            this.isRegistered = false;//confirm register form

            //email admin details.

        }        

      });
  }

}
