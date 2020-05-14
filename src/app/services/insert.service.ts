import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertService {


  private _insertSource = new Subject<string>();
  insert$ = this._insertSource.asObservable();

  constructor() { }

  insertTag(tag: string) {
    this._insertSource.next(tag);
  }

}
