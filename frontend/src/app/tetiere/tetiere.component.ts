import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { CartItemState } from '../models/states/cart-item-state';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, AsyncPipe],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent implements OnInit {
  constructor() {}

  @Select(CartItemState.getNbContacts) nb$?: Observable<number>;
  @Select(CartItemState.getPrice) price$?: Observable<number>;
  ngOnInit() {}
}


