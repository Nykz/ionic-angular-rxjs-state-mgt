import { ListService } from './../services/list/list.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public listService: ListService
  ) {}

  add(form: NgForm) {
    if(!form.valid) return;
    const data = {
      name: form.value.name
    };
    this.listService.addListItem(data);
  }

}
