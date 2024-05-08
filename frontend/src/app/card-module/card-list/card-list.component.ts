import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input() cardList: { Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; }[] = [];
}