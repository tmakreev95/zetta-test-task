import { Pipe, PipeTransform } from '@angular/core';
import { IFilter, IGame, providers, favorites, popular } from 'src/app/core/data/data-mocks';

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
      if (filter.category.id === 1) {
        result = result.filter(obj => favorites.includes(obj.id));
      }

      if (filter.category.id === 2) {
        result = result.filter(obj => popular.includes(obj.id));

      }
      if (![1, 2].includes(filter.category.id)) {
        result = [];
      }
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
