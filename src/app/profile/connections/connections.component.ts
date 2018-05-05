import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent  {

    state: string;

    connections: Array<any> = [
        {  "name": "github", "title": "GitHub", "state": true, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/github.svg" },
        {  "name": "bitbucket", "title": "BitBucket", "state": false, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/bitbucket.svg" },
        {  "name": "linkedin", "title": "LinkedIn", "state": false, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/linkedin.png" },
        {  "name": "aws", "title": "AWS", "state": true, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/aws.jpg" },
        {  "name": "swaggerhub", "title": "SwaggerHub", "state": true, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/swaggerhub.png" },
        {  "name": "apiconnect", "title": "ApiConnect", "state": true, "image": "http://res.cloudinary.com/dzmrr9uj9/image/upload/apiconnect.png" },

    ];
}
