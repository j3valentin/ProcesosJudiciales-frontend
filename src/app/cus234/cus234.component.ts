import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';

import {NumberDirective} from '../../shared/directives/number.directive';
import {UtilService} from '../../shared/services/util.service';

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

import {JuzgadoInterface} from './juzgado';
import {Proceso} from './proceso';
import {Departamento} from './departamento';
import {TipoProcesoInterface} from './tipoProceso';
import {TipoInformativoInterface} from './tipoInformativo';
import {Regional} from './regional';
import {DespachoInterface} from './despacho';
import {ClasificacionInterface} from './clasificacion';
import {CausaInterace} from './causa';
import {ModPretensionInterface} from './modPretension';
import {ActoAdminInterface} from './actoAdmin';
import {ProcesoDup} from './procesoDup';
import {Municipio} from './municipio';
import {PretensionInterface} from './pretension';
import {ClasePretensionInterface} from './clasePretencion';

@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, NumberDirective],
  providers: [HTTP_PROVIDERS, UtilService, SeguridadService,
    ProcesoService, JuzgadoService,
    DepartamentoService, MunicipioService,
    DespachoService, RegionalService,
    TipoProcesoService, TipoInformativoService, ClasificacionService,
    CausaService, ModPretensionService, PretensionService, ClasePretensionService,
    ActoAdminService, ProcesoDupService]
})
export class Cus234Component implements OnInit {
  errorMessage: string;
  procesos$: Observable<Proceso[]>;
  procesosDup$: Observable<ProcesoDup[]>;
  juzgados$: Observable<JuzgadoInterface[]>;
  despachos$: Observable<DespachoInterface[]>;
  departamentos$: Observable<Departamento[]>;
  municipios$: Observable<Municipio[]>;
  tipoProcesos$: Observable<TipoProcesoInterface[]>;
  tipoInformativos$: Observable<TipoInformativoInterface[]>;
  regionales$: Observable<Regional[]>;
  clasificaciones$: Observable<ClasificacionInterface[]>;
  causas$: Observable<CausaInterace[]>;
  modPretensiones$: Observable<ModPretensionInterface[]>;
  actosAdmin$: Observable<ActoAdminInterface[]>;
  pretensiones$: Observable<PretensionInterface[]>;
  clasesPretensiones$: Observable<ClasePretensionInterface[]>;
  proceso: Proceso = new Proceso();
  pestana: String = 'geoDatGen';

  constructor(private utilService: UtilService,
              private procesoService: ProcesoService,
              private juzgadoService: JuzgadoService,
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
              private municipioService: MunicipioService
              ) {
    console.log(this.proceso);
  }

  ngOnInit() {
    this.procesos$ = this.procesoService.procesos$;
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

  registrarReparto(proceso: Proceso) {
    console.log(proceso);
    this.procesoService.create(proceso);
  }
}
