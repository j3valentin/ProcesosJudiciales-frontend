import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';

import {NumberDirective} from '../../shared/directives/number.directive';
import {NotNumberDirective} from '../../shared/directives/not-number.directive';

import {BuscarProcesoService} from './buscarProceso.service';
import {ClasePretensionService} from '../../shared/services/clasePretension.service';
import {CausaService} from '../../shared/services/causa.service';
import {DepartamentoService} from '../../shared/services/departamento.service';
import {DespachoService} from '../../shared/services/despacho.service';
import {EstadoProcesoService} from '../../shared/services/estadoProceso.service';
import {MunicipioService} from '../../shared/services/municipio.service';
import {PretensionService} from '../../shared/services/pretension.service';
import {RegionalService} from '../../shared/services/regional.service';
import {SeguridadService} from '../../shared/services/seguridad.service';
import {TipoProcesoService} from '../../shared/services/tipoProceso.service';

import {BuscarProcesoInterface, BuscarProceso} from './buscarProceso';
import {CausaInterace} from '../../shared/model/causa';
import {ClasePretensionInterface} from '../../shared/model/clasePretension';
import {Departamento} from '../../shared/model/departamento';
import {DespachoInterface} from '../../shared/model/despacho';
import {EstadoProceso} from '../../shared/model/estadoProceso';
import {MunicipioInterface} from '../../shared/model/municipio';
import {PretensionInterface} from '../../shared/model/pretension';
import {Regional} from '../../shared/model/regional';
import {TipoProcesoInterface} from '../../shared/model/tipoProceso';


@Component({
  selector: 'sd-cus5',
  moduleId: module.id,
  templateUrl: './cus5.component.html',
  styleUrls: ['./cus5.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,
    NumberDirective, NotNumberDirective],
  providers: [HTTP_PROVIDERS, BuscarProcesoService, CausaService, ClasePretensionService,
    DepartamentoService, DespachoService, EstadoProcesoService, MunicipioService,
    PretensionService, RegionalService, SeguridadService, TipoProcesoService]
})
export class Cus5Component implements OnInit {
  buscarProceso: BuscarProceso = new BuscarProceso;
  causas$: Observable<CausaInterace[]>;
  clasesPretensiones$: Observable<ClasePretensionInterface[]>;
  departamentos$: Observable<Departamento[]>;
  despachos$: Observable<DespachoInterface[]>;
  estadosProceso$: Observable<EstadoProceso[]>;
  municipios$: Observable<MunicipioInterface[]>;
  regionales$: Observable<Regional[]>;
  pretensiones$: Observable<PretensionInterface[]>;
  procesosBuscados$: Observable<BuscarProcesoInterface[]>;
  tipoProcesos$: Observable<TipoProcesoInterface[]>;


  constructor(private buscarProcesoService: BuscarProcesoService,
              private causaService: CausaService,
              private clasePretensionService: ClasePretensionService,
              private departamentoService: DepartamentoService,
              private despachoService: DespachoService,
              private estadoProcesoService: EstadoProcesoService,
              private municipioService: MunicipioService,
              private pretensionService: PretensionService,
              private regionalService: RegionalService,
              private tipoProcesoService: TipoProcesoService) {
  }

  ngOnInit() {
    this.procesosBuscados$ = this.buscarProcesoService.procesosBusca$;
    this.causas$ = this.causaService.causas$;
    this.clasesPretensiones$ = this.clasePretensionService.clasesPretensiones$;
    this.departamentos$ = this.departamentoService.departamentos$;
    this.despachos$ = this.despachoService.despachos$;
    this.estadosProceso$ = this.estadoProcesoService.estadosProceso$;
    this.municipios$ = this.municipioService.municipios$;
    this.pretensiones$ = this.pretensionService.pretensiones$;
    this.regionales$ = this.regionalService.regionales$;
    this.tipoProcesos$ = this.tipoProcesoService.tipoProcesos$;

    this.causaService.loadAll();
    this.departamentoService.loadAll();
    this.despachoService.loadAll();
    this.estadoProcesoService.loadAll();
    this.regionalService.loadAll();
    this.tipoProcesoService.loadAll();
    this.pretensionService.loadAllByCausa(1);//TODO:listar causas
  }

  buscar() {
    this.buscarProcesoService.buscar(this.buscarProceso);
  }
}
