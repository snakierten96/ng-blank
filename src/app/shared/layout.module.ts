import { NgModule }             from '@angular/core';
import { FlexDirective }        from './flex.directive';
import { LayoutDirective }      from './layout.directive';
import { LayoutWrapDirective }  from './layout-wrap.directive';

@NgModule({
  declarations:[
    FlexDirective,
    LayoutDirective,
    LayoutWrapDirective
  ],
  imports: [],
  providers: []
})
export class LayoutModule {}