import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  @HostBinding('class.is-zoom') isZoom = true;

  @HostBinding('class.is-zoom-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
  @Input() set mwZoom(value) {
    this.isZoom = value;
  }
}
