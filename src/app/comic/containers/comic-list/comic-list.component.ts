import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-comic-list',
  template: `
    <app-comics [comics]="comics"></app-comics>
  `,
  styles: []
})
export class ComicListComponent implements OnInit {
  public comics: Comic[] = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['comics']),
        tap(comics => this.metaData(comics))
      )
      .subscribe(res => this.comics = res);
  }
  metaData(comics: Comic[]) {
      this.ui.setMetaData({
        title: 'Comics',
        description: `Displaying a list of ${comics.length} comics by DC Comics`
      });
  }

}
