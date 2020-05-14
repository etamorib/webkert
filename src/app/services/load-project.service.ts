import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadProjectService {

  public loadedContent: string;

  private _loadSource = new Subject<string>();
  load$ = this._loadSource.asObservable();

  constructor() { }

  loadCode(content: string) {
    this.loadedContent = content;
    this._loadSource.next(content);
  }

}
