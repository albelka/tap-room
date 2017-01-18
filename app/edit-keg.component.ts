import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <p>Pints left: {{childSelectedKeg.pints}}</p>
      <h3>Edit keg</h3>
      <div class="form-group">
        <label>Edit keg name:</label>
        <input [(ngModel)]="childSelectedKeg.name" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit brewery:</label>
        <input [(ngModel)]="childSelectedKeg.brand" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit price:</label>
        <input [(ngModel)]="childSelectedKeg.price" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit abv:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholContent" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <button (click)="doneButtonClicked()" class="btn">Done editing</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
