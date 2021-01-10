import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any, query: string): any {
    if (query) {

      if (typeof(parseInt(query)) == "number") {
        return value.filter((e: any) => {
          if (e['age'] == query) {
            return e.indexOf(query) > -1;
          }
          return value;
        });
      }

      else if (typeof(query)  == "string") {
        query = query.toLowerCase();

        return value.map((e: any) => {
          return e['name'].toLowerCase();
        }).filter((e: any) => {
          return e.indexOf(query) > -1;
        });
      }
    }
    return value;
  }
}
