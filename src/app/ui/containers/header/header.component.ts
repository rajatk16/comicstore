import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a routerLink="/" class="navbar-brand">
        <img [attr.src]="logo" [attr.alt]="title" width="30" height="30">
        {{title}}
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item nav-link" *ngFor="let link of links"
          [routerLink]="link.urk" routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          {{ link.label }}
          </a>
        </div>
      </div>
    `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'DC Comics Rebirth';
  public links = [{
    label: 'Comics',
    url: '/comics',
  }];
  constructor() { }

  ngOnInit() {
  }

}
