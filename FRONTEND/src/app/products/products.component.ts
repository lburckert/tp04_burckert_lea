import { Component, OnInit } from '@angular/core';

// lier le service Products
import { ProductsService } from '../products.service';
// lier class Product
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products!: Array<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.productsSubject.subscribe(
      (data) => {
        this.products = data;
      }
    );
  }
}
