import { Component } from '@angular/core';
import { fadeInAnimation } from '../../shared';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class LegalComponent  {
}