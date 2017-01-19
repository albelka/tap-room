import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-control',
  template: `
  <div *ngIf="pintsLow" (mousemove)="showHeader()">
    <h3>These kegs are low!</h3>
  </div>
    <div *ngFor="let currentKeg of childKegList">
      <div *ngIf="currentKeg.pintsLeft <= 122">
        <p>{{currentKeg.name}} has {{currentKeg.pintsLeft}}pints left.</p>
      </div>
    </div>
  `
})

export class PintControlComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  selectedKeg = null;
  pintsLow = false;

  pintSoldButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  showHeader() {
    for(let keg of this.childKegList) {
      if(keg.pintsLeft <= 10){
        this.pintsLow = true;
      }
    }
  }
}
