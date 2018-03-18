import { Pipe, PipeTransform } from '@angular/core';
import { Attribute } from '.';

@Pipe({
  name: 'attribute'
})
export class AttributePipe implements PipeTransform {
  transform(attributes: Attribute[], attributename: string, attributefield: string): string {
      var value;
      if (attributes && attributes.length > 0) {
       
        for (let current of attributes) {
          if (current.name === attributename) {
              if (attributefield === 'value') {
                value = current.value;
                break;
              } else if (attributefield === 'image') {
                value = current.image;
                break;
              } else if (attributefield === 'version') {
                value = current.version;
                break;
              } else if (attributefield === 'title') {
                value = current.title;
                break;
              }
          }
      }
    }
    return value;
  }
}