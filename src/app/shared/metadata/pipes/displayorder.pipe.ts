import { Pipe, PipeTransform } from '@angular/core';
import { Metadata } from '../models/metadata.model';

@Pipe({  name: 'displayorder' })

export class DisplayOrderSortPipe implements PipeTransform {

    transform(arr: Metadata[], args: any): Metadata[]{
        arr.sort((a: Metadata, b: Metadata) => {
            if (a && b) {
                if (a.display_order < b.display_order) {
                    return -1;
                } else if (a.display_order > b.display_order) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
        return arr;
    }
}