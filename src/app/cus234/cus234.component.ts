import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class Cus234Component {
  newName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
