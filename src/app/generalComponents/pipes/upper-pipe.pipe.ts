import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperPipe'
})
export class UpperPipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const result = value.toUpperCase();
    return (args === 'addx') ? result + 'x' : result;
  }

}
// Default pipes for angular
// Lowercasepipe
// Uppercasepipe
// Datepipe
// Currencypipe
// Jsonpipe
// Percentpipe
// Decimalpipe
// Slice
