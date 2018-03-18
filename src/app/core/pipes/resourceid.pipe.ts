import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';

@Pipe({
 name: 'resourceid'
})

@Injectable()
export class ResourceIdPipe implements PipeTransform {

    transform(value) {
        if (value && value.length > 0) {
            return value.substr(value.lastIndexOf('/') + 1, value.length);
        }
    }
}