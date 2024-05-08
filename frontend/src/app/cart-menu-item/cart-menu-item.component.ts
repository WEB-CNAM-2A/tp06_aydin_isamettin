import { Component, Input } from '@angular/core';
import { Product } from "../models/product";
import { CartItem } from '../models/models/cart-item';
import { DelItem } from '../models/actions/cart-item-action';
import { Store } from '@ngxs/store';



@Component({
  selector: 'app-cart-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-menu-item.component.html',
  styleUrl: './cart-menu-item.component.css'
})
export class CartMenuItemComponent {
  @Input() product!: CartItem;

  constructor(private store: Store) {
  }
  ngOnInit() {}

  delItem() {
    let title: string =  this.product?.title || '';
    let image: string = this.product?.image || '';
    let price: number = this.product?.price || 0;
    let origin: string = this.product?.origin || '';
    let size: string = this.product?.size || '';
    let type: string = this.product?.type || '';

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

    this.store.dispatch(new DelItem(items));
  }

}
