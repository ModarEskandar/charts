import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCascade',
})
export class FilterCascadePipe implements PipeTransform {
  transform(list: any, filterString: string, propName: string): any {
    if (list.length === 0 || filterString === '') return list;
    const resultArray = [];

    for (let item of list) {
      if (
        item[propName].toLowerCase().startsWith(filterString) ||
        this.searchFilter(item.children, filterString, propName)
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

  searchFilter(list: any, filterString: string, propName: string): any {
    if (list[propName] && list[propName].toLowerCase().startsWith(filterString))
      return true;

    for (let item of list) {
      if (item[propName].toLowerCase().startsWith(filterString)) {
        return true;
      }
      if (
        item.children !== undefined &&
        item.children.length > 0 &&
        this.searchFilter(item.children, filterString, propName)
      ) {
        return true;
      }
    }
    return false;
  }
}
