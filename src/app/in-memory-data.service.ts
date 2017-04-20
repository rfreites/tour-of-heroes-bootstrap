import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryWebApiModule {
  createDb() {
    let heroes = [
      {id: 1, name: 'Ronny'},
    ];
    return {heroes};
  }
}
