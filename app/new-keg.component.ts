import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "new-keg",
  template: `
    <h1>New Keg</h1>
    <div class="form-group">
      <label>Beer Name:</label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Brewer:</label>
      <input #newBrand class="form-control">
    </div>
    <div class="form-group">
      <label>Style:</label>
      <input #newStyle class="form-control">
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input type="number" #newPrice class="form-control">
    </div>
    <div class="form-group">
      <label>abv:</label>
      <input type="number" #newAlcoholContent class="form-control">
    </div>
    <button class="btn btn-warning" (click)="submitForm(newName.value, newBrand.value, newStyle.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newStyle.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, style: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, style, price, alcoholContent);
    console.log(newKegToAdd.price);
    this.newKegSender.emit(newKegToAdd);
  }

}
