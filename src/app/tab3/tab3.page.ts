import { ListService } from './../services/list/list.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  lists: Observable<any[]>;

  constructor(
    public listService: ListService
  ) {}

  ngOnInit() {
      this.lists = this.listService.list$;
  }

}
