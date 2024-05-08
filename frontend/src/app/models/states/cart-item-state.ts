import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddItem, DelItem} from '../actions/cart-item-action';
import { CartItemStateModel } from './cart-item-state-model';
import { CartItem } from '../models/cart-item';
@State<CartItemStateModel>({
  name: 'cartItem',
  defaults: {
    items: [],
  },
})
@Injectable()
export class CartItemState {
  @Selector()
  static getNbContacts(state: CartItemStateModel) {
    return state.items.length;
  }
  @Selector()
  static getListeContacts(state: CartItemStateModel) {
    return state.items;
  }
  @Selector()
  static getPrice(state: CartItemStateModel) {
    return state.items.reduce((acc, item) => acc + (item.price ?? 0), 0);
  }

  @Action(AddItem)
  add(
    { getState, patchState }: StateContext<CartItemStateModel>,
    { payload }: AddItem
  ) {
    const state = getState();
    patchState({
      items: [...state.items, payload],
    });
  }

  @Action(DelItem)
  del(
    { getState, patchState }: StateContext<CartItemStateModel>,
    { payload }: DelItem
  ) {
    const state = getState();
    patchState({
      items: state.items.filter(
        (x) => !(payload.title === x.title && payload.price === x.price)
      ),
    });
  }
}