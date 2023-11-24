import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstToUpperCase',
  standalone: true,
})
export class FirstToUpperCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
