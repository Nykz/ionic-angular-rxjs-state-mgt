import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _list$ = new BehaviorSubject<any[]>([]);

  get list$() {
    return this._list$.asObservable();
  }

  constructor() {}

  addListItem(data) {
    // let list = this._list$.value;
    // list = list.concat(data);
    let list = [];
    list.push(data);
    list = list.concat(this._list$.value);
    this._list$.next(list);
  }
}
