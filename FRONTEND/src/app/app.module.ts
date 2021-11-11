import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { NumberFormatPipe } from './number-format.pipe';
import { ProductsComponent } from './products/products.component';
import { SearchengineComponent } from './searchengine/searchengine.component';
import { NgxsModule } from '@ngxs/store';

import { ProductsService } from './products.service';

import { HttpClientModule  } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ProductState } from 'shared/states/product-state';

const appRoot: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  
  {
    path: 'clientAccount',
    component: FormComponent,
  },

  {
    path: 'catalog',
    component: ProductsComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

    {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'detailProduit/:id',
    component: DetailComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    NumberFormatPipe,
    ProductsComponent,
    SearchengineComponent,
    CartComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductState]),
    RouterModule,
    RouterModule.forRoot(appRoot),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
