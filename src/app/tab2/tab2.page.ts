import { ListService } from './../services/list/list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  lists: any[] = [];
  listSub: Subscription;

  constructor(
    public listService: ListService
  ) {}

  ngOnInit() {
      this.listSub = this.listService.list$.subscribe(lists => {
        this.lists = lists;
        console.log(this.lists);
      });
  }

  ngOnDestroy(): void {
      if(this.listSub) this.listSub.unsubscribe();
  }

}
