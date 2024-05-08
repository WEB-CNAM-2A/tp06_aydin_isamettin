import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";
import { SearchEngineComponent } from '../search-engine/search-engine.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, ProductsComponent, SearchEngineComponent],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.filterProducts({ title: '', origin: '', size: '', type: '' });
  }

  filterProducts(filterCriteria: { title: string, origin: string, size: string, type: string }) {
    this.products$ = this.productService.filterProducts(filterCriteria.title, filterCriteria.origin, filterCriteria.size, filterCriteria.type);
  }
}