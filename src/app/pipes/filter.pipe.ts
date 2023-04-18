import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, // can detect data change, it cost performance in other casses
})
// flter list on property item value
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') return value;
    const resultArray = [];

    for (const item of value) {
      if (item.title.text.toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
