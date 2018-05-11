import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'displayorder' })

export class DisplayOrderSortPipe implements PipeTransform {

    transform(arr: any[], args: any): any[]{
        arr.sort((a: any, b: any) => {
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