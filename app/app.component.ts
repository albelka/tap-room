import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" (click)="showHeader()">

  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

  <div *ngIf="pintsLow">
    <h3>These kegs are low!</h3>
  </div>
    <div *ngFor="let currentKeg of kegs">
      <div *ngIf="currentKeg.pintsLeft <= 122">
        <p>{{currentKeg.name}} has {{currentKeg.pintsLeft}}pints left.</p>
      </div>
    </div>

    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("7", "Upright", 7, "6.5%"),
    new Keg("Sleigher", "Ninkasi", 6, "7%"),
    new Keg("Polygamy Porter", "Uinta", 5, "3.2%"),
    new Keg("PBR", "Pabst", 1, "4.2%")

  ];
  selectedKeg = null;
  pintsLow = false;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  showHeader() {
    for(let keg of this.masterKegList) {
      if(keg.pintsLeft <= 122){
        this.pintsLow = true;
      }
    }
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }


  sellPint(currentKeg) {
    currentKeg.pintsLeft -= 1;
  }
}
