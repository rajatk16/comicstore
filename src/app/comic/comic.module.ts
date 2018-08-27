import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicListComponent } from './containers/comic-list/comic-list.component';
import { ComicDetailComponent } from './containers/comic-detail/comic-detail.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule
  ],
  declarations: [ComicListComponent, ComicDetailComponent, ComicsComponent, ComicComponent]
})
export class ComicModule { }
