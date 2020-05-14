import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateContentService {

public currentContent: string;

private _updateSource = new Subject<string>();
update$ = this._updateSource.asObservable();

constructor() { }

sendContent(content: string) {
  this.currentContent = content;
  this._updateSource.next(content);
}


}


