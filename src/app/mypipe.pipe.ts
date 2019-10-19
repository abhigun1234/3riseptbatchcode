import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any): any {
    //return null;
   // this pipe is  counting the length of the string

   // logic of counting the strength length
  }

}
