import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { IFilter } from '../data/data-mocks';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter: any | null;

  constructor() {
    this.filter = new BehaviorSubject(null);
  }

  getFilter(): Observable<IFilter> {
    return this.filter.asObservable().pipe(
      filter(val => {
        return val !== null;
      })
    );
  }

  getFilterValue(): IFilter | null {
    return this.filter.getValue();
  }

  setFilter(filter: IFilter) {
    this.filter.next(filter);
  }

  resetData() {
    this.constructor();
  }
}
