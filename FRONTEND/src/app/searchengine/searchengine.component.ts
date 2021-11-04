import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-searchengine',
  templateUrl: './searchengine.component.html',
  styleUrls: ['./searchengine.component.scss']
})
export class SearchengineComponent implements OnInit {

  brand: string = "all";
  height: string = "all";

  constructor(private productService : ProductsService ) { }

  ngOnInit(): void {
  }

  apply() : void {
    let data = {
      "brand": this.brand,
      "height": this.height
    };
    this.productService.setProducts(data);
  }

}
