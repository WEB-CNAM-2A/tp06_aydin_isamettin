import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { LoginService } from '../services/login/login.service';
import { Observable, Subscription } from 'rxjs';
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
  jwtToken: string | null = null;

  constructor(private authService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.authService.jwtToken$.subscribe(token => {
      this.jwtToken = token;
      console.log('JWT Token updated:', token);
    });
  }

  logout(): void {
    this.authService.setJwtToken(null);
    this.router.navigate(['/recapitulatif']);
  }

  @Select(CartItemState.getNbContacts) nb$?: Observable<number>;
  @Select(CartItemState.getPrice) price$?: Observable<number>;
}


