import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeThemeService {

  private _changeTheme = new Subject<string>();
  theme$ = this._changeTheme.asObservable();

  constructor() { }

  changeTheme(theme: string) {
    this._changeTheme.next(theme);
  }
}
