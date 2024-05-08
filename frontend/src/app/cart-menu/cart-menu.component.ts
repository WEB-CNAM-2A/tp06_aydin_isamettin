import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CartItemState } from '../models/states/cart-item-state';
import { CartItem } from '../models/models/cart-item';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartMenuItemComponent } from "../cart-menu-item/cart-menu-item.component";



@Component({
  selector: 'app-cart-menu',
  standalone: true,
  imports: [AsyncPipe, CartMenuItemComponent],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.css'
})
export class CartMenuComponent implements OnInit {
  @Select(CartItemState.getListeContacts) products$: Observable<CartItem[]> | undefined;


  constructor() {}

  @Select(CartItemState.getNbContacts) nb$?: Observable<number>;
  @Select(CartItemState.getPrice) price$?: Observable<number>;
  ngOnInit() {}
}
