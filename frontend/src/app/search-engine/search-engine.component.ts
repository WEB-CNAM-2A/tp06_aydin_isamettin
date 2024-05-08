import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  @Output() filterCriteria: EventEmitter<{ title: string, origin: string, size: string, type: string }> = new EventEmitter();

  title: string = '';
  image: string = '';
  price: number = 0;
  origin: string = '';
  size: string = '';
  type: string = '';

  constructor(private productService: ProductService) { }

  search() {
    this.filterCriteria.emit({ title: this.title, origin: this.origin, size: this.size, type: this.type });
  }

  reset() {
    this.title = '';
    this.origin = '';
    this.size = '';
    this.type = '';
    this.search();
  }
}
