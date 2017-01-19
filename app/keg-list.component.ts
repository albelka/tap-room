import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h1>Portland Taproom</h1>

  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Beers</option>
    <option value="onSale">Beers on Sale</option>
  </select>

  <div class="well" [class]= "priceColor(currentKeg)"  *ngFor="let currentKeg of childKegList | sale:filterByOnSale">
    <h4>{{currentKeg.name}}</h4>
    <img *ngIf="showBender(currentKeg)" src="../resources/images/bender.png">
    <p>{{currentKeg.brand}}</p>
    <p>\${{currentKeg.price | number: '1.2'}}</p>
    <p>{{currentKeg.alcoholContent}} abv</p>
    <p>Pints left: {{currentKeg.pintsLeft}}

    <button (click)="pintSoldButtonHasBeenClicked(currentKeg)">Pint sold</button><button (click)="growlerSoldButtonHasBeenClicked(currentKeg)">64 oz growler sold</button></p>
     <button (click)="editKegButtonHasBeenClicked(currentKeg)">Edit</button>
     <br>
     <span>On sale</span>
     <input *ngIf="currentKeg.onSale === true" type="checkbox" checked (click)="toggleOnSale(currentKeg, false)">
     <input *ngIf="currentKeg.onSale === false" type="checkbox" (click)="toggleOnSale(currentKeg, true)">
  </div>
  <hr>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();
  @Output() growlerClickSender = new EventEmitter();

  @Output() saleClickSender = new EventEmitter();

  filterByOnSale: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByOnSale = optionFromMenu;
  }

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
    if (currentKeg.alcoholContent >= 7) {
      return true;
    }
  }

  editKegButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pintSoldButtonHasBeenClicked(kegToEdit: Keg) {
    this.pintClickSender.emit(kegToEdit);
  }

  growlerSoldButtonHasBeenClicked(kegToEdit: Keg) {
    this.growlerClickSender.emit(kegToEdit);
  }

  saleKegButtonHasBeenClicked(kegToEdit: Keg) {
    this.saleClickSender.emit(kegToEdit);
  }

  toggleOnSale(clickedKeg: Keg, setOnSale: boolean) {
    clickedKeg.onSale = setOnSale;
    if(clickedKeg.onSale === true) {
      clickedKeg.price = clickedKeg.price / 2;
    } else if(clickedKeg.onSale === false) {
      clickedKeg.price = clickedKeg.price * 2;
    }
  }
}
