import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { CardInputComponent } from '../card-input/card-input.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CardListComponent, CardInputComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cardList: { Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; }[] = [];

  onCardListChange(cardList: { Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; }[]) {
    this.cardList = cardList;
  }

}
