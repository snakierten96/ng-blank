import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[layout-wrap]'
})
export class LayoutWrapDirective {
  @HostBinding('style.flex-wrap') wrap = 'wrap';
}