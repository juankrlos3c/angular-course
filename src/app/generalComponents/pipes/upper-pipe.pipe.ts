import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperPipe'
})
export class UpperPipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
