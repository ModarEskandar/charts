import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string, ..._args: any): string {
    if (!args) {
      return value;
    }
    console.log('value', value);
    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);
    console.log('regex', regex);

    if (!match) {
      return value;
    }

    return value.replace(
      regex,
      `<span class='bg-orange-400'>${match[0]}</span>`
    );
  }
}
