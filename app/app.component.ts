import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" (click)="showHeader()">
    <h1>Portland Taproom</h1>
    <div class="keg" [class]= "priceColor(currentKeg)"  *ngFor="let currentKeg of kegs">
      <h4>{{currentKeg.name}}</h4>
      <img *ngIf="showBender(currentKeg)" src="../resources/images/bender.png">
      <p>{{currentKeg.brand}}</p>
      <p>\${{currentKeg.price}}.00</p>
      <p>{{currentKeg.alcoholContent}} abv</p>
      <p>Pints left: {{currentKeg.pintsLeft}} <button (click)="sellPint(currentKeg)">Pint sold</button></p>
       <button (click)="editKeg(currentKeg)">Edit</button>
    </div>
    <hr>
    <div *ngIf="pintsLow">
      <h3>These kegs are low!</h3>
    </div>

    <div *ngFor="let currentKeg of kegs">
      <div *ngIf="currentKeg.pintsLeft <= 122">
          <p>{{currentKeg.name}} has {{currentKeg.pintsLeft}}pints left.</p>
        </div>
      </div>

    <hr>
    <div *ngIf="selectedKeg">
      <h3>{{selectedKeg.name}}</h3>
      <p>Pints left: {{selectedKeg.pints}}</p>
      <h3>Edit keg</h3>
      <div class="form-group">
        <label>Edit keg name:</label>
        <input [(ngModel)]="selectedKeg.name" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit brewery:</label>
        <input [(ngModel)]="selectedKeg.brand" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit price:</label>
        <input [(ngModel)]="selectedKeg.price" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit abv:</label>
        <input [(ngModel)]="selectedKeg.alcoholContent" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <button (click)="finishedEditing()" class="btn">Done editing</button>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("7", "Upright", 7, "6.5%"),
    new Keg("Sleigher", "Ninkasi", 6, "7%"),
    new Keg("Polygamy Porter", "Uinta", 5, "3.2%"),
    new Keg("PBR", "Pabst", 1, "4.2%")

  ];

  finishedEditing() {
    this.selectedKeg = null;
  }

  selectedKeg = null;
  pintsLow = false;

  showHeader() {
    for(let keg of this.kegs) {
      if(keg.pintsLeft <= 122){
        this.pintsLow = true;
      }
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellPint(currentKeg) {
    currentKeg.pintsLeft -= 1;
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
    if (currentKeg.alcoholContent >= "7") {
      return true;
    }
  }
}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) {}
}
