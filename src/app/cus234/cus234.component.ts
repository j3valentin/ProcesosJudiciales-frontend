import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES,
        FORM_DIRECTIVES}   from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {SeguridadService}  from '../../shared/services/seguridad.service';
import {ProcesoService}    from './proceso.service';
import {Juzgado}           from './juzgado';
import {Proceso}           from './proceso';

@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SeguridadService, ProcesoService]
})
export class Cus234Component implements OnInit {
  errorMessage: string;
  procesos: Proceso[];
  juzgados: Juzgado[];
  proceso: Proceso;

  constructor(
    public seguridadService: SeguridadService,
    public _service: ProcesoService
  ) {
    this.procesos = [];
  }

  ngOnInit() {
//    console.log('Llamando al auth...');
//    console.log(this.seguridadService.auth());
//    console.log('Auth llamado!');
    this.getJuzgados();
  }

  getJuzgados() {
    this._service.getJuzgados()
      .subscribe(
        juzgados => this.juzgados = juzgados,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

//  onProcesoChange(nProcesoNumero: number) {
//    console.log('Entra');
//    this._service.getAllByProcesoNumero(nProcesoNumero)
//                     .subscribe(
//                       procesos => this.procesos = procesos,
//                       error => this.errorMessage = <any>error);
//    console.log(nProcesoNumero);
//  }
}
