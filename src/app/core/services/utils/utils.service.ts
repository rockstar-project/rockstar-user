import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class UtilsService {

  isLoaded(loading: boolean): boolean {
    return loading === false;
  }

  tabIs(currentTab: string, tab: string): boolean {
    // Check if current tab is tab name
    return currentTab === tab;
  }

  capitalize(str: string): string {
    // Capitalize first letter of string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  resourceId(url: string) {
      if (url && url.length > 0) {
        return url.substr(url.lastIndexOf('/') + 1, url.length);
      }
  }

  sortDisplayOrder(arr: any[], args: any): any[]{
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