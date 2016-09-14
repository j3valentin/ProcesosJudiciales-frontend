import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Observable} from 'rxjs';
import {HTTP_PROVIDERS} from 'angular2/http';

import {RegionalService} from '../../shared/services/regional.service';
import {MunicipioService} from '../../shared/services/municipio.service';
import {DepartamentoService} from '../../shared/services/departamento.service';

import {Regional} from '../../shared/model/regional';
import {MunicipioInterface} from '../../shared/model/municipio';
import {Departamento} from '../../shared/model/departamento';

@Component({
  selector: 'sd-cus7',
  moduleId: module.id,
  templateUrl: './cus7.component.html',
  styleUrls: ['./cus7.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionalService, MunicipioService, DepartamentoService]
})
export class Cus7Component implements OnInit {
  regionales$: Observable<Regional[]>;
  municipios$: Observable<MunicipioInterface[]>;
  departamentos$: Observable<Departamento[]>;

  constructor(
              private regionalService: RegionalService,
              private municipioService: MunicipioService,
              private departamentoService: DepartamentoService) {}

  ngOnInit() {
    this.regionales$ = this.regionalService.regionales$;
    this.municipios$ = this.municipioService.municipios$;
    this.departamentos$ = this.departamentoService.departamentos$;

    this.regionalService.loadAll();
    this.departamentoService.loadAll();

  }
}
