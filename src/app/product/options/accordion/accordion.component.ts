import { Component, Input } from '@angular/core';
import { Option, GroupOptions } from '../../../core';

@Component({
  selector: 'app-option-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class OptionAccordionComponent {

  @Input()
  items: GroupOptions[];

}