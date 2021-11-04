import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { NumberFormatPipe } from './number-format.pipe';
import { ProductsComponent } from './products/products.component';
import { SearchengineComponent } from './searchengine/searchengine.component';

import { ProductsService } from './products.service';

import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    NumberFormatPipe,
    ProductsComponent,
    SearchengineComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
