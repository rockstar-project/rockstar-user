import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MicroserviceService, Capability, Choice } from '../../../core';

@Component({
  selector: 'app-option-filters',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionFilterComponent implements OnInit, OnChanges {

  @Input()
  filters: Array<Capability>;

  @Input()
  title: string;

  @Output()
  selectfilter: EventEmitter<Choice> = new EventEmitter<Choice> ();

  @Output()
  close: EventEmitter<string> = new EventEmitter<string> ();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes) {
        const itemChange: SimpleChange = changes.filters;
        if (itemChange) {
            this.filters = itemChange.currentValue;
        }
      }
  }

  onSelect(value: Choice) {
    this.selectfilter.emit(value);
  }

  closeSidebar() {
    this.close.emit('close');
  }

}