import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { appRoutes } from './routes';
import { CheckoutComponent } from './checkout/checkout.component';

import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule , MatFormFieldModule , MatInputModule ,
        MatGridListModule, MatMenuModule, MatIconModule, MatButtonModule , MatCheckboxModule , 
        MatTabsModule , MatListModule , MatTableModule} from '@angular/material';
import { TransactionComponent } from './transaction/transaction.component';
import { ProductsComponent } from './products/products.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PointOfSaleComponent } from './point-of-sale/point-of-sale.component';
import { ReportsComponent } from './reports/reports.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { UsersComponent } from './users/users.component';
import { ShopService } from './shared/shop.service';
import { CategoriesService } from './shared/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShopComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TransactionComponent,
    ProductsComponent,
    TransactionHistoryComponent,
    PointOfSaleComponent,
    ReportsComponent,
    CategoriesComponent,
    ProductItemsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, MatMenuModule, MatIconModule, MatButtonModule ,
    MatCheckboxModule , MatTabsModule, MatGridListModule , MatListModule,
    MatTableModule

  ],
  providers: [ShopService, CategoriesService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
