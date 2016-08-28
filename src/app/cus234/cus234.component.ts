import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';

import {SeguridadService} from '../../shared/services/seguridad.service';
import {JuzgadoService} from './services/juzgado.service';
import {ProcesoService} from './services/proceso.service';
import {DepartamentoService} from '../../shared/services/departamento.service';
import {DespachoService} from './services/despacho.service';
import {RegionalService} from './services/regional.service';
import {TipoProcesoService} from './services/tipoProceso.service';
import {TipoInformativoService} from './services/tipoInformativo.service';
import {ClasificacionService} from './services/clasificacion.service';
import {CausaService} from './services/causa.service';
import {ClasePretensionService} from './services/clasePretension.service';
import {ModPretensionService} from './services/modPretension.service';
import {PretensionService} from './services/pretension.service';
import {ActoAdminService} from './services/actoAdmin.service';
import {ProcesoDupService} from './services/procesoDup.service';
import {MunicipioService} from '../../shared/services/municipio.service';

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
import {Municipio} from './municipio';
import {Pretension} from './pretension';
import {ClasePretension} from './clasePretencion';

@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SeguridadService,
    ProcesoService, JuzgadoService,
    DepartamentoService, MunicipioService,
    DespachoService, RegionalService,
    TipoProcesoService, TipoInformativoService, ClasificacionService,
    CausaService, ModPretensionService, PretensionService, ClasePretensionService,
    ActoAdminService, ProcesoDupService]
})

export class Cus234Component implements OnInit {
  errorMessage: string;
  procesos: Proceso[];
  procesosDup$: Observable<ProcesoDup[]>;
  juzgados$: Observable<Juzgado[]>;
  despachos$: Observable<Despacho[]>;
  departamentos$: Observable<Departamento[]>;
  municipios$: Observable<Municipio[]>;
  tipoProcesos$: Observable<TipoProceso[]>;
  tipoInformativos$: Observable<TipoInformativo[]>;
  regionales$: Observable<Regional[]>;
  clasificaciones$: Observable<Clasificacion[]>;
  causas$: Observable<Causa[]>;
  modPretensiones$: Observable<ModPretension[]>;
  actosAdmin$: Observable<ActoAdmin[]>;
  pretensiones$: Observable<Pretension[]>;
  clasesPretensiones$: Observable<ClasePretension[]>;
  proceso: Proceso;
  pestana: String = 'geoDatGen';

  constructor(private juzgadoService: JuzgadoService,
              private despachoService: DespachoService,
              private regionalService: RegionalService,
              private tipoProcesoService: TipoProcesoService,
              private tipoInformativoService: TipoInformativoService,
              private clasificacionService: ClasificacionService,
              private causaService: CausaService,
              private clasePretensionService: ClasePretensionService,
              private modPretensionService: ModPretensionService,
              private pretensionService: PretensionService,
              private actoAdminService: ActoAdminService,
              private procesoDupService: ProcesoDupService,
              private departamentoService: DepartamentoService,
              private municipioService: MunicipioService,
              public seguridadService: SeguridadService,
              public _service: ProcesoService) {
    this.procesos = [];
    // this.proceso = {
    //   prj_fechanotifica: '2016-06-18',
    //   prj_23digitos: 1234567891011121314151617,
    //   prj_numerobizagi: '2016_132456',
    //   tipo: {
    //     tip_id: 1,
    //     tip_descripcion: 'oordinario laboral'
    //   },
    //   Nombre_Dem: 'Camilo Erazo',
    //   CC_Dem: 80234562,
    //   despacho: {
    //     dei_id: 1,
    //     dei_descripcion: 'Juzgado 028',
    //     tij_id: '1',
    //     dpt_id: '1',
    //     mpi_id: 1,
    //     dei_consecutivoid: '',
    //     dei_concatenado: ''
    //   },
    //   estadoProceso: {
    //     esp_id: 4,
    //     esp_descripcion: 'Duplicado'
    //   },
    //   juzgado: {
    //     tij_id: '1',
    //     ciudad: {
    //       mpi_id: ''
    //     }
    //   },
    //   apoderado:{
    //     tia_id:''
    //   },
    //   causa{
    //
    //   }
    // };
  }

  ngOnInit() {
    this.juzgados$ = this.juzgadoService.juzgados$;
    this.departamentos$ = this.departamentoService.departamentos$;
    this.municipios$ = this.municipioService.municipios$;
    this.despachos$ = this.despachoService.despachos$;
    this.regionales$ = this.regionalService.regionales$;
    this.tipoProcesos$ = this.tipoProcesoService.tipoProcesos$;
    this.tipoInformativos$ = this.tipoInformativoService.tipoInformativos$;
    this.clasificaciones$ = this.clasificacionService.clasificaciones$;
    this.causas$ = this.causaService.causas$;
    this.modPretensiones$ = this.modPretensionService.modPretensiones$;
    this.clasesPretensiones$ = this.clasePretensionService.clasesPretensiones$;
    this.pretensiones$ = this.pretensionService.pretensiones$;
    this.actosAdmin$ = this.actoAdminService.actosAdmin$;
    this.procesosDup$ = this.procesoDupService.procesosDup$;

    this.juzgadoService.loadAll();
    this.departamentoService.loadAll();
    this.despachoService.loadAll();
    this.regionalService.loadAll();
    this.tipoProcesoService.loadAll();
    this.tipoInformativoService.loadAll();
    this.clasificacionService.loadAll();
    this.causaService.loadAll();
    this.modPretensionService.loadAll();
    this.actoAdminService.loadAll();
    this.procesoDupService.loadAll();
  }

  onDepartamentoChange(dpt_id: number) {
    console.log(`Cambio de despartamento con ${dpt_id}`);
    this.municipioService.loadAllByDepto(dpt_id);
  }

  onCausaChange(cap_id: number) {
    console.log(`Cambio de causa con ${cap_id}`);
    this.pretensionService.loadAllByCausa(cap_id);
  }

  onPretensionChange(prp_id: number) {
    console.log(`Cambio de Pretension con ${prp_id}`);
    this.pretensionService.loadAllByCausa(prp_id);
  }

  onProcesoChange(nProcesoNumero: number) {
    console.log('Entra');
    this._service.getAllByProcesoNumero(nProcesoNumero)
      .subscribe(
        procesos => this.procesos = procesos,
        error => this.errorMessage = <any>error);
    console.log(nProcesoNumero);
  }
}
