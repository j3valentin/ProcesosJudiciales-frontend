import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Observable} from 'rxjs';
import {JuzgadoService} from '../cus234/services/juzgado.service';
import {OnInit} from 'angular2/src/core/linker/interfaces';
import {DespachoService} from '../../shared/services/despacho.service';
import {DespachoInterface} from '../../shared/model/despacho';
import {Departamento} from '../../shared/model/departamento';
import {DepartamentoService} from '../../shared/services/departamento.service';
import {MunicipioService} from '../../shared/services/municipio.service';
import {MunicipioInterface} from '../../shared/model/municipio';
import {TipoProcesoInterface} from '../../shared/model/tipoProceso';
import {TipoProcesoService} from '../../shared/services/tipoProceso.service';
import {ClasificacionService} from '../cus234/services/clasificacion.service';
import {TipoInformativoService} from '../cus234/services/tipoInformativo.service';
import {RegionalService} from '../../shared/services/regional.service';
import {Regional} from '../../shared/model/regional';
import {ActoAdminService} from '../cus234/services/actoAdmin.service';
import {PretensionInterface} from '../../shared/model/pretension';
import {PretensionService} from '../../shared/services/pretension.service';
import {ClasePretensionService} from '../../shared/services/clasePretension.service';
import {ClasePretensionInterface} from '../../shared/model/clasePretension';
import {HTTP_PROVIDERS} from 'angular2/http';
import {JuzgadoInterface} from '../cus234/model/juzgado';
import {ClasificacionInterface} from '../cus234/model/clasificacion';
import {TipoInformativoInterface} from '../cus234/model/tipoInformativo';
import {ActoAdminInterface} from '../cus234/model/actoAdmin';
import {Proceso} from '../cus234/model/proceso';
import {Beneficiario} from '../cus234/model/beneficiario';


@Component({
  selector: 'sd-cus6',
  moduleId: module.id,
  templateUrl: './cus6.component.html',
  styleUrls: ['./cus6.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, JuzgadoService,
    DepartamentoService, MunicipioService,
    DespachoService, RegionalService,
    TipoProcesoService, TipoInformativoService,
    ClasificacionService, PretensionService,
    ClasePretensionService, ActoAdminService]
})
export class Cus6Component implements OnInit {
  juzgados$: Observable<JuzgadoInterface[]>;
  despachos$: Observable<DespachoInterface[]>;
  departamentos$: Observable<Departamento[]>;
  municipios$: Observable<MunicipioInterface[]>;
  tipoProcesos$: Observable<TipoProcesoInterface[]>;
  clasificaciones$: Observable<ClasificacionInterface[]>;
  tipoInformativos$: Observable<TipoInformativoInterface[]>;
  regionales$: Observable<Regional[]>;
  actosAdmin$: Observable<ActoAdminInterface[]>;
  pretensiones$: Observable<PretensionInterface[]>;
  clasesPretensiones$: Observable<ClasePretensionInterface[]>;

  proceso: Proceso = new Proceso();
  pestana: String = 'geoDatGen';
  newName: string;

  constructor(private juzgadoService: JuzgadoService,
              private despachoService: DespachoService,
              private departamentoService: DepartamentoService,
              private municipioService: MunicipioService,
              private tipoProcesoService: TipoProcesoService,
              private clasificacionService: ClasificacionService,
              private tipoInformativoService: TipoInformativoService,
              private regionalService: RegionalService,
              private actoAdminService: ActoAdminService,
              private pretensionService: PretensionService,
              private clasePretensionService: ClasePretensionService) {

  }

  ngOnInit() {
    this.juzgados$ = this.juzgadoService.juzgados$;
    this.despachos$ = this.despachoService.despachos$;
    this.departamentos$ = this.departamentoService.departamentos$;
    this.municipios$ = this.municipioService.municipios$;
    this.tipoProcesos$ = this.tipoProcesoService.tipoProcesos$;
    this.clasificaciones$ = this.clasificacionService.clasificaciones$;
    this.tipoInformativos$ = this.tipoInformativoService.tipoInformativos$;
    this.regionales$ = this.regionalService.regionales$;
    this.actosAdmin$ = this.actoAdminService.actosAdmin$;
    this.pretensiones$ = this.pretensionService.pretensiones$;
    this.clasesPretensiones$ = this.clasePretensionService.clasesPretensiones$;

    this.juzgadoService.loadAll();
    this.departamentoService.loadAll();
    this.despachoService.loadAll();
    this.regionalService.loadAll();
    this.tipoProcesoService.loadAll();
    this.clasificacionService.loadAll();
    this.actoAdminService.loadAll();

    this.proceso.beneficiarios.push(new Beneficiario());
  }
  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.newName = '';
    return false;
  }
}
