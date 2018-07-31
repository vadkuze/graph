import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapObject'
})
export class MapObjectPipe implements PipeTransform {

  transform(value: Array<any>): any {
      let items: Array<any> = [];

      for( let key of value){
        //
        let { id, name,
              type: category, 
              revenuePerWeek: weekStats, 
              revenue: balance, 
              monthRevenue: monthBalance
            } = key;
        //
        key = {id, name, category, weekStats, balance, monthBalance};
        //
        items.push(key);
      }

    return items;
  }

}