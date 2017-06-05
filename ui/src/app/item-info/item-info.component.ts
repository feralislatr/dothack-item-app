import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Item } from '../item/item';
import { ItemService } from '../item/item.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'item-modal',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit{
	@Input() item: Item;

  constructor(
  private itemService: ItemService,
  private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.itemService.getItem(+params['id']))
    .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }


  useItem(item: Item): void{
    this.itemService.use(item).then(() => item);
  }

  discardItem(item: Item): void{
    this.itemService.discard(item).then(() => null);
  }

  // save(): void {
  //   this.itemService.update(this.item)
  //     .then(() => this.goBack());
  // }
}