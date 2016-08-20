import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {SeguridadService} from '../../shared/services/seguridad.service';
import {JuzgadoService} from './juzgado.service';
import {ProcesoService} from './proceso.service';

import {Juzgado} from './juzgado';
import {Proceso} from './proceso';
import {Departamento} from './departamento';
import {TipoProceso} from './tipoProceso';
import {TipoInformativo} from './tipoInformativo';
import {Regional} from './regional';
import {Despacho} from './despacho';
import {Clasificacion} from './clasificacion';
import {Causa} from './causa';
import {ModPretension} from './modPretension';
import {ActoAdmin} from './actoAdmin';
import {ProcesoDup} from './procesoDup';
import {Observable} from 'rxjs';

@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SeguridadService, ProcesoService, JuzgadoService]
})
export class Cus234Component implements OnInit {
  errorMessage: string;
  procesos: Proceso[];
  procesosDup: ProcesoDup[];
  juzgados$: Observable<Juzgado[]>;
  despachos: Despacho[];
  departamentos: Departamento[];
  tiposProcesos: TipoProceso[];
  tiposInformativo: TipoInformativo[];
  regionales: Regional[];
  clasificaciones: Clasificacion[];
  causas: Causa[];
  modPretensiones: ModPretension[];
  actosAdmin: ActoAdmin[];
  proceso: Proceso;

  constructor(
    private juzgadoService: JuzgadoService,
    public seguridadService: SeguridadService,
    public _service: ProcesoService) {
    this.procesos = [];
  }

  ngOnInit() {
    this.juzgados$ = this.juzgadoService.juzgados$;
    this.juzgadoService.loadAll();

//    console.log('Llamando al auth...');
//    console.log(this.seguridadService.auth());
//    console.log('Auth llamado!');
    this.getDespachos();
    this.getDepartamentos();
    this.getRegionales();
    this.getTipoProceso();
    this.getTipoinformativo();
    this.getClasificacion();
    this.getCausas();
    this.getModPretension();
    this.getActosAdmin();
    this.getProcesosDup();
  }

  getDespachos() {
    this._service.getDespachos()
      .subscribe(
        despachos => this.despachos = despachos,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getDepartamentos() {
    this._service.getDepartamentos()
      .subscribe(
        departamentos => this.departamentos = departamentos,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getRegionales() {
    this._service.getRegionales()
      .subscribe(
        regionales => this.regionales = regionales,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getTipoProceso() {
    this._service.getTipoProceso()
      .subscribe(
        tipoProcesos => this.tiposProcesos = tipoProcesos,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getTipoinformativo() {
    this._service.getTipoInformativo()
      .subscribe(
        tiposInformativo => this.tiposInformativo = tiposInformativo,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getClasificacion() {
    this._service.getClasificacion()
      .subscribe(
        clasificaciones => this.clasificaciones = clasificaciones,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getCausas() {
    this._service.getCausas()
      .subscribe(
        causas => this.causas = causas,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getModPretension() {
    this._service.getModPretension()
      .subscribe(
        modPretensiones => this.modPretensiones = modPretensiones,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getActosAdmin() {
    this._service.getActosAdmin()
      .subscribe(
        actosAdmin => this.actosAdmin = actosAdmin,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  getProcesosDup() {
    this._service.getProcesosDup()
      .subscribe(
        procesosDup => this.procesosDup = procesosDup,
        error => this.errorMessage = <any>error
//        () => console.log(this.juzgados)
      );
  }

  // onDepartamentoChange( dpt_id: number){
  //
  // }

//  onProcesoChange(nProcesoNumero: number) {
//    console.log('Entra');
//    this._service.getAllByProcesoNumero(nProcesoNumero)
//                     .subscribe(
//                       procesos => this.procesos = procesos,
//                       error => this.errorMessage = <any>error);
//    console.log(nProcesoNumero);
//  }
}
