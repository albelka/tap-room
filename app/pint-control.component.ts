import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-control',
  template: `
  <div class="container">

    <div *ngFor="let currentKeg of childKegList">
      <div *ngIf="currentKeg.pintsLeft <= 122">
        <p>{{currentKeg.name}} has {{currentKeg.pintsLeft}}pints left.</p>

      </div>
    </div>
    </div>
  `
})

export class PintControlComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() growlerClickSender = new EventEmitter();

  selectedKeg = null;
  pintsLow = false;
}
