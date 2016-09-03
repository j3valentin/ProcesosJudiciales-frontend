/**
 * Created by Johan AR on 31/08/16.
 */

import {Directive,
  ElementRef, Renderer,
  HostListener} from 'angular2/core';

@Directive({selector: '[number]'})
export class NumberDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('change', ['$event']) onChange(event) {
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event']) onContextMenu(event) {
    event.preventDefault();
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    event.preventDefault();
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    var evt = event || window.event;
    var key = evt.keyCode || evt.which;
    if ([46, 8, 9, 27, 13].indexOf(key) !== -1 ||
      // Allow: Ctrl+A
      (key === 65 && key === true) ||
      // Allow: Ctrl+C
      (key === 67 && key === true) ||
      // Allow: Ctrl+X
      (key === 88 && key === true) ||
      // Allow: home, end, left, right
      (key >= 35 && key <= 40)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((evt.shiftKey || evt.ctrlKey ||
      (key < 48 || key > 57)) &&
      (key < 96 || key > 105)) {
      evt.preventDefault();
    }

    var regex = /[0-9]|\./;
    if( !regex.test(evt.key) ) {
      evt.returnValue = false;
      if(evt.preventDefault) evt.preventDefault();
    }
  }

  @HostListener('keyup') onKeyUp() {
    let nel = this.el.nativeElement;
    this.renderer.setElementProperty(nel, 'value', nel.value.replace(/[^0-9]/g, ''));
  }
}
