import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';

@Pipe({
 name: 'resourceid'
})

@Injectable()
export class ResourceIdPipe implements PipeTransform {

    transform(value) {
        return value.substr(value.lastIndexOf('/') + 1, value.length);
    }
}