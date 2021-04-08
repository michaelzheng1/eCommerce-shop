import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/common/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  // templateUrl: './item-list.component.html',
  templateUrl: './item-list-table.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.itemService.getItemList().subscribe(
      data => {
        this.items = data;
      }
    )
  }

}
