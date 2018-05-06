import { Component, Input, SimpleChanges, SimpleChange, OnChanges, OnInit } from '@angular/core';
import { Option, GroupOptions } from '../../../core';

@Component({
  selector: 'app-option-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class OptionTabsComponent implements OnInit, OnChanges {

  @Input()
  items: GroupOptions[];

  selected: GroupOptions;

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
      if (changes) {
        const itemChange: SimpleChange = changes.items;
        if (itemChange) {
            this.items = itemChange.currentValue;
        }
    }
  }

  onSelectCapability(groupOptions: GroupOptions) {
    this.selected = groupOptions;
  }

}