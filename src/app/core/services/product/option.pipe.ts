import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '.';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {
  transform(options: Option[], optionname: string, optionfield: string): string {
      var value = '';
      if (options && options.length > 0) {
        for (let current of options) {
          if (current.name === optionname) {
              if (optionfield === 'value') {
                value = current.value;
                break;
              } else if (optionfield === 'image') {
                value = current.image;
                break;
              } else if (optionfield === 'version') {
                value = current.version;
                break;
              } else if (optionfield === 'title') {
                value = current.title;
                break;
              } else if (optionfield === 'description') {
                value = current.title + ' ' + current.version;
                break;
              }
          }
      }
    }
    return value;
  }
}