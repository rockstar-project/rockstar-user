import { Component, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Option } from '../../../core';

@Component({
  selector: 'app-option-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class OptionGridComponent implements OnChanges {

  @Input()
  items: Option[];

  ngOnChanges(changes: SimpleChanges) {
    const itemChange: SimpleChange = changes.items;
    if (itemChange) {
        this.items = itemChange.currentValue;
    }
  }

}