import { Component } from '@angular/core';
import { fadeInAnimation } from './fadein.animation';

@Component({
    selector: 'app-home-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class BlogComponent  {
}
