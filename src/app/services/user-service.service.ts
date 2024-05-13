import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User = {
    fullName: 'Ben Klino',
    coins: 100,
    moves: []
  }

  public getUser() {
    return this._user
  }
}
