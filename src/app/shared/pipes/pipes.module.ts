import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGamesPipe } from './filter-games.pipe';

@NgModule({
  declarations: [
    FilterGamesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterGamesPipe
  ]
})
export class PipesModule { }
