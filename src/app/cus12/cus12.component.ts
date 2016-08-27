import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'sd-cus12',
  moduleId: module.id,
  templateUrl: './cus12.component.html',
  styleUrls: ['./cus12.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class Cus12Component {
  newName: string;

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.newName = '';
    return false;
  }
}
