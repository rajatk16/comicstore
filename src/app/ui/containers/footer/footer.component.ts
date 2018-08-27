import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
    <div class="navbar-text m-auto text-white">
      The comics, characters, everything else presented here belongs to DC Comics.
    </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
