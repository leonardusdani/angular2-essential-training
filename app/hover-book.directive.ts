import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverBookDirective {
  @HostBinding('class.is-book') isFavorite = true;

  @HostBinding('class.is-book-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
}
