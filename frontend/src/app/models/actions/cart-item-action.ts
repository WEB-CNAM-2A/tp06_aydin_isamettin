import { CartItem } from '../models/cart-item';

export class AddItem {
  static readonly type = '[CartItem] Add';

  constructor(public payload: CartItem) {}
}

export class DelItem {
  static readonly type = '[CartItem] Del';

  constructor(public payload: CartItem) {}
}
