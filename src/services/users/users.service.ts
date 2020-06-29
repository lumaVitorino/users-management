import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { BaseService } from '../base.service';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {
  protected publicUrl = 'https://uitest.free.beeceptor.com/usernames';
  protected baseURL = environment.apiBaseUrl + '/api/users';

  constructor(injector: Injector) {
    super(injector);
  }
  
  getUsers() : Observable<User[]> {
    const url = this.baseURL;
    return this.get<User[]>(`${url}`);
  }

  createUsers(user: User) : Observable<User> {
    return this.post<User>(this.baseURL, user);
  }

  updateUser(id: number, user: User) : Observable<User> {
    return this.put<User>(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.delete(`${this.baseURL}/${id}`);
  }
}
