import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "sale",
  pure: false
})

export class PutOnSalePipe implements PipeTransform {

  transform(input: Keg[], saleOrNot) {
    var output: Keg[] = [];
    if(saleOrNot === "onSale"){
    for (var i = 0; i < input.length; i++) {
        if(input[i].onSale === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
