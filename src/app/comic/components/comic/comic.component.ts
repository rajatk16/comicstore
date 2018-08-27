import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  template: `
    <div class="card">
      <div class="card-header">
        <h4 class="my-2">
          <ng-container *ngIf="details; else link">
            {{comic.name}}
          </ng-container>
          <ng-template #link>
            <a [routerLink]="comic.id">{{comic.name}}</a>
          </ng-template>
        </h4>
      </div>
      <img [attr.src]="comic.image" [attr.alt]="comic.name" class="card-img">
      <div class="card-body" *ngIf="details">
        <p class="my-2">{{comic.description}}</p>
      </div>
      <div class="card-footer">
        <h4 class="text-right my-2">{{comic.price}}</h4>
      </div>
    </div>
  `,
  styles: []
})
export class ComicComponent implements OnInit {
  @Input() public comic: Comic[];
  @Input() public details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
