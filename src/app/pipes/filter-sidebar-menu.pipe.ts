import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSidbarMenu',
  pure: false, // can detect data change, it cost performance in other casses
})
// flter list on property item value
export class FilterSidbarMenuPipe implements PipeTransform {
  transform(items: any, filterString: string): any {
    console.log(items);

    return (items ?? []).filter((item: any) => {
      return (item.searchText ?? '')
        .toLowerCase()
        .includes(filterString.toLowerCase());
    });
  }
}
