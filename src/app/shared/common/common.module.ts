import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './pipes';
import { ResourceIdPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchFilterPipe,
    ResourceIdPipe
  ],
  declarations: [
    SearchFilterPipe,
    ResourceIdPipe
  ],
  providers: [
  ]
})
export class RockstarCommonModule { }
