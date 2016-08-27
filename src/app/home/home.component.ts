import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES,
        FORM_DIRECTIVES}   from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {SeguridadService}  from '../../shared/services/seguridad.service';
import {ProcesoService}    from './proceso.service';
import {Proceso}           from './proceso';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  // templateUrl: './CU02-GDG.html',
//  templateUrl: './CU02-DCPE.html',
  // templateUrl: './CU05.html',
//  templateUrl: './CU07.html',
//  templateUrl: './CU08.html',
//  templateUrl: './CU07.html',
  templateUrl: './CU11.html',
  styleUrls: ['./home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SeguridadService, ProcesoService]
})
export class HomeComponent implements OnInit {
  newName: string;

  errorMessage: string;
  procesos: Proceso[];

  constructor(
    public seguridadService: SeguridadService,
    private _service: ProcesoService
  ) {}

  ngOnInit() {
    console.log('Llamando al auth...');
    console.log(this.seguridadService.auth());
    console.log('Auth llamado!');
  }

  onProcesoChange(nProcesoNumero: number) {
    this._service.getAllByProcesoNumero(nProcesoNumero)
                     .subscribe(
                       procesos => this.procesos = procesos,
                       error => this.errorMessage = <any>error);
    console.log(nProcesoNumero);
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
//    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
