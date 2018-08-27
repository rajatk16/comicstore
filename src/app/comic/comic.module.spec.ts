import { ComicModule } from './comic.module';

describe('ComicModule', () => {
  let comicModule: ComicModule;

  beforeEach(() => {
    comicModule = new ComicModule();
  });

  it('should create an instance', () => {
    expect(comicModule).toBeTruthy();
  });
});
