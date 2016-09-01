/**
 * Created by Johan AR on 31/08/16.
 */

import {Directive,
  ElementRef, Renderer,
  HostListener} from 'angular2/core';

@Directive({selector: '[number]'})
export class NotNumberDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  // @HostListener('change', ['$event']) onChange(event) {
  //   let nel = this.el.nativeElement;
  //   this.renderer.setElementProperty(nel, 'value', nel.value.replace(/[^0-9]/g, ''));
  //   this.value.match(/\d+/g)
  //   event.preventDefault();
  // }

  @HostListener('contextmenu', ['$event']) onContextMenu(event) {
    event.preventDefault();
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    event.preventDefault();
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    if ([8, 9, 13, 27, 32, 46, 192].indexOf(event.keyCode) !== -1 ||
      // Allow: alphabet
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      // Allow: Arrows, Home and End
      (event.keyCode >= 35 && event.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (event.keyCode >= 96 || event.keyCode <= 105) {
      event.preventDefault();
    }
  }

  @HostListener('keyup') onKeyUp() {
    let nel = this.el.nativeElement;
    this.renderer.setElementProperty(nel, 'value', nel.value.replace(/[^0-9]/g, ''));
  }
}
