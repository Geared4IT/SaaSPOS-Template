import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PointOfSaleComponent} from './point-of-sale/point-of-sale.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { CategoriesComponent } from './categories/categories.component';

export const appRoutes : Routes = [
  { path: 'register', component:RegisterComponent },
  { path: 'shop', component:ShopComponent, canActivate : [AuthGuard]},
  { path: 'dashboard', component:DashboardComponent, canActivate : [AuthGuard]},
  { path: 'checkout', component:CheckoutComponent, canActivate : [AuthGuard]},
  { path: 'product', component:ProductsComponent, canActivate : [AuthGuard]},
  { path: 'point-of-sale', component:PointOfSaleComponent, canActivate : [AuthGuard]},
  { path: 'categories', component:CategoriesComponent, canActivate : [AuthGuard]},
  { path: 'product-items', component:ProductItemsComponent, canActivate : [AuthGuard]},
  {path:'',redirectTo:'/register',pathMatch:'full'}
];