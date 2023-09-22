import { Component, OnInit } from '@angular/core';
import { IFilter, IGame, games } from '../../core/data/data-mocks';
import { FilterService } from 'src/app/core/services/filter.service';
import { Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  games: IGame[];
  filter: IFilter;
  subs: Subscription = new Subscription();

  constructor(private filterService: FilterService) {
    this.games = games;
  }

  ngOnInit(): void {
    this.filter = {
      searchTerm: '',
      category: null,
      provider: null,
      providers: null,
      genre: null,
      genres: null
    };

    this.subs.add(
      this.filterService.getFilter()
        .pipe(
          tap(
            () => this.loading = true
          ),
          debounceTime(1000),
        )
        .subscribe(data => {
          this.filter = data;

          this.loading = false;
        })
    );
  }
  resetFilter(): void {
    this.filterService.setFilter({
      searchTerm: '',
      category: null,
      provider: null,
      providers: null,
      genre: null,
      genres: null
    })
  }
}
