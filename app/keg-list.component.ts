import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h1>Portland Taproom</h1>
  <div class="keg" [class]= "priceColor(currentKeg)"  *ngFor="let currentKeg of childKegList">
    <h4>{{currentKeg.name}}</h4>
    <img *ngIf="showBender(currentKeg)" src="../resources/images/bender.png">
    <p>{{currentKeg.brand}}</p>
    <p>\${{currentKeg.price}}.00</p>
    <p>{{currentKeg.alcoholContent}} abv</p>
    <p>Pints left: {{currentKeg.pintsLeft}} <button (click)="sellPint(currentKeg)">Pint sold</button></p>
     <button (click)="editKegButtonHasBeenClicked(currentKeg)">Edit</button>
  </div>
  <hr>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  priceColor(currentKeg) {
    if (currentKeg.price >= 7) {
      return "bg-danger";
    } else if (currentKeg.price >=5) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  showBender(currentKeg) {
    if (currentKeg.alcoholContent >= "7") {
      return true;
    }
  }

  editKegButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
