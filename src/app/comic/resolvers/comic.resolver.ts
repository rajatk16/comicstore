import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Comic } from '../models/comic';
import { ComicService } from '../services/comic.service';

@Injectable({
  providedIn: 'root',
})
export class ComicResolver implements Resolve<Comic> {
  constructor(private service: ComicService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getComic(route.paramMap.get('id'));
  }
}
