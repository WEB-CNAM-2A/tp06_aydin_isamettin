import { Component, Input } from '@angular/core';
import { Product } from "../models/product";
import { CartItem } from '../models/models/cart-item';
import { Store } from '@ngxs/store';
import { AddItem } from '../models/actions/cart-item-action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() product!: Product;

  constructor(private store: Store) {
  }
  ngOnInit() {}

  addItem() {
    let title: string =  this.product.title;
    let image: string = this.product.image;
    let price: number = this.product.price;
    let origin: string = this.product.origin;
    let size: string = this.product.size;
    let type: string = this.product.type;

    let items: CartItem;

    items = {
      title: title,
      image: image,
      price: price,
      origin: origin,
      size: size,
      type: type
    };

    console.log(items);

    this.store.dispatch(new AddItem(items));
  }
}
