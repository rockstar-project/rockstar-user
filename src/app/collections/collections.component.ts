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

    favoriteCollection: Array<any> = [
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_1",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_2",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_3",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_4",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_5",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_8",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_9",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_10",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_11",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=favorite_12"
    ];

    downloadCollection: Array<any> = [
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=download_1",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=download_2",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=download_3",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=download_4",
      "https://placeholdit.co//i/250x250?&bg=f5f5f5&fc=c4c4c4&text=download_5"
    ];

}
