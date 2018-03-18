import { Pipe, PipeTransform } from '@angular/core';

const IMAGE_FALLBACK_DEFAULT = 'http://res.cloudinary.com/dzmrr9uj9/image/upload/missing.png';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {
    transform(value: string, fallback: string): string {
      let image = "";
      if (value) {
        image = value;
      } else {
          if (fallback) {
            image = fallback;
          } else {
              image = IMAGE_FALLBACK_DEFAULT;
          }
      }
      return image;
    }
}