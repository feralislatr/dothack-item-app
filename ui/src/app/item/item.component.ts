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

  // //bring up item modal
  // getInfo(): void {
  //   this.router.navigate(['/info', this.currentItem.id]);
  // }

  //@TODO
  newItem(quantity: number, name: string, desc: string): void {
    name = name.trim();
    desc = desc.trim();
    if (!quantity || !name || !desc) { 
      console.log("not enough things");
      return; 
    }
    this.itemService.create(quantity, name, desc)
      .then(item => {
        this.items.push(item);
        this.currentItem= null;
       });
  }
  
  delete(item: Item): void {
    this.itemService
        .delete(item.id)
        .then(() => {
          this.items = this.items.filter(i => i !== item);
          if (this.currentItem === item) { this.currentItem = null; }
        });
  }

}
