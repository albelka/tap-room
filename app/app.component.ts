import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" >

  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pintClickSender)="sellPint($event)"></keg-list>

  <pint-control [childKegList]="masterKegList" (clickSender)="sellPint($event)"></pint-control>

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



  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  sellPint(currentKeg) {
    currentKeg.pintsLeft -= 1;
  }
}
