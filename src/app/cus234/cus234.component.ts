import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {SeguridadService} from '../../shared/services/seguridad.service';
import {JuzgadoService} from './juzgado.service';
import {ProcesoService} from './proceso.service';
import {DepartamentoService} from './departamento.service';
import {DespachoService} from './despacho.service';
import {RegionalService} from './regional.service';
import {TipoProcesoService} from './tipoProceso.service';
import {TipoInformativoService} from './tipoInformativo.service';
import {ClasificacionService} from './clasificacion.service';
import {CausaService} from './causa.service';
import {ModPretensionService} from './modPretension.service';
import {ActoAdminService} from './actoAdmin.service';
import {ProcesoDupService} from './procesoDup.service';

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
  providers: [HTTP_PROVIDERS, SeguridadService, ProcesoService,
    JuzgadoService, DepartamentoService, DespachoService, RegionalService,
    TipoProcesoService, TipoInformativoService, ClasificacionService,
    CausaService, ModPretensionService, ActoAdminService, ProcesoDupService]
})
export class Cus234Component implements OnInit {
  errorMessage: string;
  procesos: Proceso[];
  procesosDup$: Observable<ProcesoDup[]>;
  juzgados$: Observable<Juzgado[]>;
  despachos$: Observable<Despacho[]>;
  departamentos$: Observable<Departamento[]>;
  tipoProcesos$: Observable<TipoProceso[]>;
  tipoInformativos$: Observable<TipoInformativo[]>;
  regionales$: Observable<Regional[]>;
  clasificaciones$: Observable<Clasificacion[]>;
  causas$: Observable<Causa[]>;
  modPretensiones$: Observable<ModPretension[]>;
  actosAdmin$: Observable<ActoAdmin[]>;
  proceso: Proceso;

  constructor(private juzgadoService: JuzgadoService,
              private despachoService: DespachoService,
              private regionalService: RegionalService,
              private tipoProcesoService: TipoProcesoService,
              private tipoInformativoService: TipoInformativoService,
              private clasificacionService: ClasificacionService,
              private causaService: CausaService,
              private modPretensionService: ModPretensionService,
              private actoAdminService: ActoAdminService,
              private procesoDupService: ProcesoDupService,
              private departamentoService: DepartamentoService,
              public seguridadService: SeguridadService,
              public _service: ProcesoService) {
    this.procesos = [];
  }

  ngOnInit() {
    this.juzgados$ = this.juzgadoService.juzgados$;
    this.juzgadoService.loadAll();
    this.departamentos$ = this.departamentoService.departamentos$;
    this.departamentoService.loadAll();
    this.despachos$ = this.despachoService.despachos$;
    this.despachoService.loadAll();
    this.regionales$ = this.regionalService.regionales$;
    this.regionalService.loadAll();
    this.tipoProcesos$ = this.tipoProcesoService.tipoProcesos$;
    this.tipoProcesoService.loadAll();
    this.tipoInformativos$ = this.tipoInformativoService.tipoInformativos$;
    this.tipoInformativoService.loadAll();
    this.clasificaciones$ = this.clasificacionService.clasificaciones$;
    this.clasificacionService.loadAll();
    this.causas$ = this.causaService.causas$;
    this.causaService.loadAll();
    this.modPretensiones$ = this.modPretensionService.modPretensiones$;
    this.modPretensionService.loadAll();
    this.actosAdmin$ = this.actoAdminService.actosAdmin$;
    this.actoAdminService.loadAll();
    this.procesosDup$ = this.procesoDupService.procesosDup$;
    this.procesoDupService.loadAll();
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
