import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})

export class ItemComponent implements OnInit {
	title = 'Item Inventory';
	currentItem: Item;
	items: Item[];
  item = {};

  constructor(
  	private router: Router,
    private itemService: ItemService) { 
  }

  onSelect(item: Item): void {
  	this.currentItem = item;
  }

  ngOnInit(): void {
    console.log("oye");
    console.log(this.items);
  	this.itemService.getItems().then(items => this.items = items);
  }

  //bring up item modal
  getInfo(): void {
    this.router.navigate(['/info', this.currentItem.id]);
  }

  //@TODO
  create(name: string): void {
    name = name.trim();
    if (!name) { 
      return; 
    }
    this.itemService.create(name)
      .then(item => {
        this.items.push(item);
        this.currentItem= null;
       });
  }
  //@TODO
  // use(id: number): void{

  // }

  // delete(item: Item): void {
  //   this.itemService
  //       .delete(item.id)
  //       .then(() => {
  //         this.items = this.items.filter(i => i !== item);
  //         if (this.currentItem === item) { this.currentItem = null; }
  //       });
  // }

}
