import { InMemoryDbService } from 'angular-in-memory-web-api';
import { users } from './data/users.data';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { users };
  }
  
}
