import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';

import {NumberDirective} from '../../shared/directives/number.directive';
import {NotNumberDirective} from '../../shared/directives/not-number.directive';

import {SeguridadService} from '../../shared/services/seguridad.service';
import {JuzgadoService} from './services/juzgado.service';
import {TipoApoderadoService} from './services/tipoApoderado.service';
import {TipoUnidadService} from './services/tipoUnidad.service';
import {ProcesoService} from './services/proceso.service';
import {DepartamentoService} from '../../shared/services/departamento.service';
import {DespachoService} from '../../shared/services/despacho.service';
import {RegionalService} from '../../shared/services/regional.service';
import {TipoProcesoService} from '../../shared/services/tipoProceso.service';
import {TipoInformativoService} from './services/tipoInformativo.service';
import {ClasificacionService} from './services/clasificacion.service';
import {CausaService} from '../../shared/services/causa.service';
import {ClasePretensionService} from '../../shared/services/clasePretension.service';
import {ModPretensionService} from './services/modPretension.service';
import {PretensionService} from '../../shared/services/pretension.service';
import {ActoAdminService} from './services/actoAdmin.service';
import {ProcesoDupService} from './services/procesoDup.service';
import {MunicipioService} from '../../shared/services/municipio.service';
import {EstadoProcesoService} from '../../shared/services/estadoProceso.service';

import {JuzgadoInterface} from './model/juzgado';
import {Proceso} from './model/proceso';
import {Departamento} from '../../shared/model/departamento';
import {TipoProcesoInterface} from '../../shared/model/tipoProceso';
import {TipoInformativoInterface} from './model/tipoInformativo';
import {Regional} from '../../shared/model/regional';
import {DespachoInterface} from '../../shared/model/despacho';
import {ClasificacionInterface} from './model/clasificacion';
import {CausaInterace} from '../../shared/model/causa';
import {ModPretensionInterface} from './model/modPretension';
import {ActoAdminInterface} from './model/actoAdmin';
import {ProcesoDup} from './model/procesoDup';
import {MunicipioInterface} from '../../shared/model/municipio';
import {PretensionInterface} from '../../shared/model/pretension';
import {ClasePretensionInterface} from '../../shared/model/clasePretension';
import {EstadoProceso} from '../../shared/model/estadoProceso';
import {Beneficiario} from './model/beneficiario';
import {ApoderadoInterface} from './model/apoderado';
import {TipoUnidadInterface} from './model/tipoUnidad';


@Component({
  selector: 'sd-cus234',
  moduleId: module.id,
  templateUrl: './cus234.component.html',
  styleUrls: ['./cus234.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,
    NumberDirective, NotNumberDirective],
  providers: [HTTP_PROVIDERS, SeguridadService,
    ProcesoService, JuzgadoService,
    DepartamentoService, MunicipioService,
    DespachoService, RegionalService,TipoUnidadService,
    TipoProcesoService, TipoInformativoService,
    ClasificacionService,  CausaService, ModPretensionService,
    PretensionService, ClasePretensionService, TipoApoderadoService,
    ActoAdminService, ProcesoDupService, EstadoProcesoService]
})
export class Cus234Component implements OnInit {
  errorMessage: string;
  procesosDup$: Observable<ProcesoDup[]>;
  juzgados$: Observable<JuzgadoInterface[]>;
  despachos$: Observable<DespachoInterface[]>;
  departamentos$: Observable<Departamento[]>;
  municipios$: Observable<MunicipioInterface[]>;
  tipoProcesos$: Observable<TipoProcesoInterface[]>;
  tipoInformativos$: Observable<TipoInformativoInterface[]>;
  tiposApoderado$: Observable<ApoderadoInterface[]>;
  tiposUnidad$: Observable<TipoUnidadInterface[]>;
  regionales$: Observable<Regional[]>;
  clasificaciones$: Observable<ClasificacionInterface[]>;
  causas$: Observable<CausaInterace[]>;
  modPretensiones$: Observable<ModPretensionInterface[]>;
  actosAdmin$: Observable<ActoAdminInterface[]>;
  pretensiones$: Observable<PretensionInterface[]>;
  clasesPretensiones$: Observable<ClasePretensionInterface[]>;
  estadosProceso$: Observable<EstadoProceso[]>;
  proceso: Proceso = new Proceso();
  pestana: String = 'geoDatGen';
  procesoDupSelect: number;

  constructor(private procesoService: ProcesoService,
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
              private estadoProcesoService: EstadoProcesoService,
              private procesoDupService: ProcesoDupService,
              private departamentoService: DepartamentoService,
              private tipoApoderadoService: TipoApoderadoService,
              private tipoUnidadService: TipoUnidadService,
              private municipioService: MunicipioService
              ) {}

  ngOnInit() {
    this.procesosDup$ = this.procesoDupService.procesosDup$;
    this.juzgados$ = this.juzgadoService.juzgados$;
    this.departamentos$ = this.departamentoService.departamentos$;
    this.municipios$ = this.municipioService.municipios$;
    this.despachos$ = this.despachoService.despachos$;
    this.regionales$ = this.regionalService.regionales$;
    this.tipoProcesos$ = this.tipoProcesoService.tipoProcesos$;
    this.tipoInformativos$ = this.tipoInformativoService.tipoInformativos$;
    this.tiposApoderado$ = this.tipoApoderadoService.tiposApod$;
    this.tiposUnidad$ = this.tipoUnidadService.tiposUnidad$;
    this.clasificaciones$ = this.clasificacionService.clasificaciones$;
    this.causas$ = this.causaService.causas$;
    this.modPretensiones$ = this.modPretensionService.modPretensiones$;
    this.clasesPretensiones$ = this.clasePretensionService.clasesPretensiones$;
    this.pretensiones$ = this.pretensionService.pretensiones$;
    this.actosAdmin$ = this.actoAdminService.actosAdmin$;
    this.procesosDup$ = this.procesoDupService.procesosDup$;
    this.estadosProceso$ = this.estadoProcesoService.estadosProceso$;

    this.juzgadoService.loadAll();
    this.departamentoService.loadAll();
    this.despachoService.loadAll();
    this.regionalService.loadAll();
    this.tipoProcesoService.loadAll();
    this.tipoApoderadoService.loadAll();
    this.tipoUnidadService.loadAll();
    this.clasificacionService.loadAll();
    this.causaService.loadAll();
    this.modPretensionService.loadAll();
    this.actoAdminService.loadAll();
    this.actoAdminService.loadAll();
    this.estadoProcesoService.loadAll();

    this.proceso.beneficiarios.push(new Beneficiario());
  }

  addBeneficiario() {
    this.proceso.beneficiarios.push(new Beneficiario());
  }

  removeBeneficiario() {
    this.proceso.beneficiarios.pop();
  }

  registrarReparto() {
    this.procesoService.create(this.proceso);
  }
}
