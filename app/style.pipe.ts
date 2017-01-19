import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {

  transform(input: Keg[], filterByStyle) {
    console.log(input);
    var output: Keg[] = [];
    if(filterByStyle === 'IPA'){
    for (var i = 0; i < input.length; i++) {
        if(input[i].style === 'IPA') {
          output.push(input[i]);
          console.log(input[i]);
        }
      }
      return output;
    }
    if(filterByStyle === 'Lager'){
    for (var i = 0; i < input.length; i++) {
        if(input[i].style === 'Lager') {
          output.push(input[i]);
        }
      }
      return output;
    }
    if(filterByStyle === 'Winter Warmer'){
    for (var i = 0; i < input.length; i++) {
        if(input[i].style === 'Winter Warmer') {
          output.push(input[i]);
        }
      }
      return output;
    }
    if(filterByStyle === 'Porter'){
    for (var i = 0; i < input.length; i++) {
        if(input[i].style === 'Porter') {
          output.push(input[i]);
        }
      }
      return output;
    }  else {
      return input;
    }
  }
}
