import { Component, Input, OnInit } from '@angular/core';
import { Option, GroupOptions } from '../../../core';

@Component({
  selector: 'app-option-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class OptionAccordionComponent implements OnInit {

  @Input()
  items: any[];

  activeIds: string[] = [];

  ngOnInit() {
    this.activeIds = this.items.map(i => 'panel-' + i.name);
  }

}