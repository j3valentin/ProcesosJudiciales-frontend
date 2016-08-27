import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'sd-cus9',
  moduleId: module.id,
  templateUrl: './cus9.component.html',
  styleUrls: ['./cus9.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class Cus9Component {
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
