import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent  {

    connections: Array<any> = [
        {  "name": "github", "title": "GitHub", "enabled": true, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/github.svg" },
        {  "name": "bitbucket", "title": "BitBucket", "enabled": false, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/v1514344062/bitbucket.svg" }
    ];
}
