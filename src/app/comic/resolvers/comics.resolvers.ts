import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Comic } from '../models/comic';
import { ComicService } from '../services/comic.service';

@Injectable ({
  providedIn: 'root',
})
export class ComicsResolver implements Resolve<Comic[]> {
  constructor(private service: ComicService) {}

  resolve() {
    return this.service.getComics();
  }
}
