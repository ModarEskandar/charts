import { Component, Input, OnInit } from '@angular/core';

export type TTree<T> = {
  children?: TTree<T>[];
  searchText: string;
} & T;

/**
 * flat list to tree
 *
 * @param list - a flat list
 * @param params - `{ id, parentId }`: id name and parentId name
 * @example `arrayToTree<IInvestigation>(investArr, { investId: 'investId', parentId: 'investParentId' });`
 * @returns `TTree`
 */
export const arrayToTree = <T>(
  list: T[],
  { id, parentId, name }: { id: string; parentId: string; name: string }
): TTree<T>[] | [] => {
  /** map between id and array position */
  const map: number[] = [];
  const treeList: TTree<T>[] = list as TTree<T>[];

  for (let i = 0; i < treeList.length; i += 1) {
    /** initialize the map */
    map[(treeList[i] as TTree<T> & { [investId: string]: number })[id]] = i;
    /** initialize the children */
    treeList[i].children = [];
  }

  let node: TTree<T> & { [parentId: string]: number };
  /** return value */
  const roots: TTree<T>[] = [];

  for (const item of treeList) {
    node = item as TTree<T> & { [parentId: string]: number };
    // console.log(node);
    if (node[parentId]) {
      if (treeList[map[node[parentId]]] !== undefined) {
        treeList[map[node[parentId]]].children?.push(node);
        // treeList[map[node[parentId]]].searchText = treeList[map[node[parentId]]]
        //   .searchText
        //   ? '' + node[name]
        //   : treeList[map[node[parentId]]].searchText + node[name];
      }
    } else {
      // node.searchText = node.searchText + node[name];
      roots.push(node);
    }
  }
  console.log(roots);

  return roots;
};

export interface IInvestigation {
  investId: number;
  investParentId?: number | undefined;
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  investArr = [
    {
      investId: 1,
      name: 'تحقيقات جارية',
    },
    {
      investId: 11,
      name: 'جوازات حديثة',
      investParentId: 1,
    },
    {
      investId: 111,
      name: 'قيد العمل',
      investParentId: 11,
    },
    {
      investId: 112,
      name: 'لم يتم البدء',
      investParentId: 11,
    },
    {
      investId: 12,
      name: 'تجديد',
      investParentId: 1,
    },
    {
      investId: 121,
      name: 'تم التجديد',
      investParentId: 12,
    },
    {
      investId: 122,
      name: 'نقص في الوثائق',
      investParentId: 12,
    },
    {
      investId: 2,
      name: 'تحقيقات منتهية',
    },
    {
      investId: 21,
      name: 'وثائق صالحة',
      investParentId: 2,
    },
    {
      investId: 211,
      name: 'تم التصديق',
      investParentId: 21,
    },
    {
      investId: 212,
      name: 'قيد العمل',
      investParentId: 21,
    },
    {
      investId: 22,
      name: 'وثائق غير مطابقة',
      investParentId: 2,
    },
    {
      investId: 221,
      name: 'طلب إعادة',
      investParentId: 22,
    },
    {
      investId: 222,
      name: 'مرفوضة',
      investParentId: 22,
    },
  ];
  arrToTreeRes = {};
  searchList: any[] = [];
  result: any[] = [];
  allItems = '';
  @Input() filterText!: string;
  ngOnInit(): void {
    this.arrToTreeRes = arrayToTree<IInvestigation>(this.investArr, {
      id: 'investId',
      parentId: 'investParentId',
      name: 'name',
    });
    this.searchList = Object.values(this.arrToTreeRes).map((item: any) => {
      this.allItems = '';
      return this.buildSearchText(item, '', item.name);
    });
    console.log('aaaaaa', this.searchList.flat());
  }
  buildSearchText(list: any, parentName: string, allItems: string) {
    console.log(allItems);
    if (list.children.length > 0) {
      for (let child of list.children) {
        child.parents = list.parents
          ? list.parents + '@' + list.name
          : list.name;
        this.allItems = this.allItems + '@' + child.name;
        list.parents = list.parents + '@' + child.name;
        // child.searchText = child.searchText + list.name;
        this.buildSearchText(child, list.parents, allItems);
      }
      list.searchText = list.parents + '@' + list.name;
    } else {
      {
        list.searchText = list.parents + '@' + list.name;
        allItems = allItems + list.name;
      }
    }
    if (!list.investParentId) list.searchText = this.allItems + '@' + list.name;
    return list;
  }
}
