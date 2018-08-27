import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComicListComponent} from './containers/comic-list/comic-list.component';
import {ComicDetailComponent} from './containers/comic-detail/comic-detail.component';
import { ComicsResolver } from './resolvers/comics.resolvers';
import { ComicResolver} from './resolvers/comic.resolver';

const routes: Routes = [{
  path: '',
  component: ComicListComponent,
  resolve: { comics: ComicsResolver },
}, {
  path: ':id',
  component: ComicDetailComponent,
  resolve: { comic: ComicResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
