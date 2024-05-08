import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-input',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.css'
})
export class CardInputComponent {
  @Output() cardListChange = new EventEmitter<{ Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; }[]>();

  // Reactive form for card input
  cardForm = new FormGroup({
    Nom: new FormControl(''),
    Code: new FormControl(''),
    CCV: new FormControl(''),
    Date: new FormControl(''),
  });

  // Card list
  cardList: { Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; }[] = [];

  onSubmit() {
    const card: { Nom: string | null; Code: string | null; CCV: string | null; Date: string | null; } = {
      Nom: this.cardForm.value.Nom || null,
      Code: this.cardForm.value.Code || null,
      CCV: this.cardForm.value.CCV || null,
      Date: this.cardForm.value.Date || null,
    };
    this.cardList.push(card);
    this.cardListChange.emit(this.cardList);
    this.onReset();
    console.log(this.cardList);
  }

  // Reset card form
  onReset() {
    this.cardForm.reset();
  }

  // Get card form value
  get cardFormValue() {
    return this.cardForm.value;
  }
}
