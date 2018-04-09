import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Star Lord" },
      { id: 12, name: "Ironman" },
      { id: 13, name: "Wonder Woman" },
      { id: 14, name: "Black Widow" },
      { id: 15, name: "Rocket" },
      { id: 16, name: "Spiderman" },
      { id: 17, name: "Thor" },
      { id: 18, name: "Dr. Strange" },
      { id: 19, name: "Hulk" },
      { id: 20, name: "Captain America" }
    ];
    return {heroes};
  }
}
