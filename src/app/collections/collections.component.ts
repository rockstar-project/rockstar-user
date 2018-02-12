import { Component } from '@angular/core';
import { fadeInAnimation } from '../shared';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class CollectionsComponent  {

    collections: Array<any> = [];

}
