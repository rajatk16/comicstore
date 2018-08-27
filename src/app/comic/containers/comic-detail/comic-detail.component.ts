import { Component, OnInit } from '@angular/core';
import {Comic} from '../../models/comic';
import { ActivatedRoute} from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-comic-detail',
  template: `
  <app-comic [comic]="comic" [details]="true"></app-comic>
  `,
  styles: []
})
export class ComicDetailComponent implements OnInit {
  public comic: Comic = new Comic();

  constructor(
    private route: ActivatedRoute,
    private ui: UiService
  ) {}
  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['comic']),
        tap(comic => this.metaData(comic)),
      )
      .subscribe(res => this.comic = res);
  }
  metaData(comic: Comic) {
    this.ui.setMetaData({
      title: `${comic.name} for only $${comic.price}`,
      description: comic.description,
      image: comic.image
    });
  }
}
