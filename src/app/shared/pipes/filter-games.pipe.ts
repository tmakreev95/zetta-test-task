import { Pipe, PipeTransform } from '@angular/core';
import { IFilter, IGame, providers } from 'src/app/core/data/data-mocks';

@Pipe({
  name: 'filterGames'
})
export class FilterGamesPipe implements PipeTransform {
  transform(value: IGame[], filter: IFilter): IGame[] {
    if (!value) {
      return [];
    }

    let result = value;

    if (!!filter && filter.category) {
      result = result.filter(obj => {
        return filter.category?.gameIds.includes(obj.id);
      });
    }

    if (!!filter && filter.provider) {
      result = result.filter(obj => obj.provider === filter.provider?.id);
    }

    if (!!filter && filter.genre) {
      result = result.filter(obj => obj.genre === filter.genre);
    }

    if (!!filter && filter.searchTerm !== null) {

      result = result.filter(obj =>
        obj.title.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        obj.genre.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        obj.provider === providers.find(
          el =>
            el.name.toLocaleLowerCase().includes(
              filter.searchTerm.toLocaleLowerCase()
            ))?.id)
    }

    return result;
  }

}
