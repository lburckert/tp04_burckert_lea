import { Injectable } from '@angular/core';

import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productsSubject : Subject<Array<Product>> = new Subject<Array<Product>>();
  products! : Array<Product>;
  allProducts! : Array<Product>;

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Array<Product> {
    if (this.products === undefined) {
      this.httpClient.get<Array<Product>>(environment.baseUrl).subscribe(
        (response) => {
          this.products = response;
          this.allProducts = response;
          this.emitProductSubject();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    return this.products;
  }

  public setProducts(data: any) : void {
    this.products = this.allProducts.slice();
    if (data["brand"] !== "all") {
      this.products = this.products.filter(product => product.brand === data["brand"]);
    }
    if (data["height"] !== "all") {
      this.products = this.products.filter(product => product.height === data["height"]);
    }
    
    this.emitProductSubject();
  }

  private emitProductSubject() {
    // slice : extrait le texte d'une chaine de caractères et retourne une nouvelle chaîne de caractères
    this.productsSubject.next(this.products.slice());
  }
}
