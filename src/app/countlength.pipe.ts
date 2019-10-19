import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countlength'
})
export class CountlengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //counting the length of the string
    
    return null;
  }

}
