import { Component, HostListener, OnInit } from '@angular/core';
import { ICategory, IProvider, categories, providers, genres, IFilter, games } from '../../data/data-mocks';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterService } from '../../services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  providersGameMap = new Map();
  genresGameMap = new Map();

  categories = categories;
  providers = providers;
  genres = genres;
  filter: IFilter;
  games = games;

  subs: Subscription = new Subscription();
  searchTerm: string = '';

  // get searchTermControl(): FormControl {
  //   return this.formGroup.get('searchTerm') as FormControl;
  // }

  showFiltersBelow: boolean = false;

  selectedCategory: ICategory | null = null;
  selectedProvider: IProvider | null = null;
  selectedGenre: string | null = null;

  constructor(
    private filterService: FilterService,
    private sanitizer: DomSanitizer
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 568) {
      this.showFiltersBelow = true;
    } else {
      this.showFiltersBelow = false;
    }
  }

  ngOnInit(): void {
    // this.formGroup = new FormGroup({
    //   searchTerm: new FormControl({
    //     value: !!this.filter && !!this.filter.searchTerm ? this.filter.searchTerm : null,
    //     disabled: false
    //   })
    // });

    this.filter = {
      searchTerm: '',
      category: null,
      provider: null,
      providers: providers,
      genre: null,
      genres: genres,
    };

    this.filterService.setFilter(this.filter);

    if (window.innerWidth <= 568) {
      this.showFiltersBelow = true;
    } else {
      this.showFiltersBelow = false;
    }

    this.getAggregateGamesCount();

    // this.searchTermControl.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(data => {
    //     this.searchTerm = data;
    //     this.filter.searchTerm = data;

    //     this.filterService.setFilter({
    //       ...this.filter
    //     });

    //   });

    this.subs.add(
      this.filterService.getFilter().subscribe(data => {
        this.filter = data;

        this.searchTerm = this.filter.searchTerm;
        this.selectedCategory = this.filter.category;
        this.selectedGenre = this.filter.genre;
        this.selectedProvider = this.filter.provider;
      })
    );
  }

  getSafeURL(src: string) {
    return this.sanitizer.bypassSecurityTrustUrl(`url(${src})`);
  }

  setCategoryFilter(category: ICategory) {
    this.selectedCategory = category;
    this.filter.category = category;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  setAllCategoryFilter() {
    this.selectedCategory = null;
    this.filter.category = this.selectedCategory;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  setProviderFilter(provider: IProvider) {
    this.selectedProvider = provider;
    this.filter.provider = this.selectedProvider;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  setAllProviderFilter() {
    this.selectedProvider = null;
    this.filter.provider = this.selectedProvider;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  setGenreFilter(genre: string) {
    this.selectedGenre = genre;
    this.filter.genre = this.selectedGenre;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  setAllGenreFilter() {
    this.selectedGenre = null;
    this.filter.genre = this.selectedGenre;

    this.filterService.setFilter({
      ...this.filter
    });
  }

  getAggregateGamesCount() {
    this.games.forEach(game => {
      let providersCount = this.providersGameMap.get(game.provider);
      let genresCount = this.genresGameMap.get(game.genre);

      if (providersCount > 0) {
        this.providersGameMap.set(game.provider, providersCount += 1);
      } else {
        this.providersGameMap.set(game.provider, 1);
      }

      if (genresCount > 0) {
        this.genresGameMap.set(game.genre, genresCount += 1);
      } else {
        this.genresGameMap.set(game.genre, 1);
      }
    });
  }

  searchTermInputChange(event: any) {
    this.searchTerm = event.target.value;
    this.filter.searchTerm = event.target.value;

    this.filterService.setFilter({
      ...this.filter
    });
  }
}
