import {Injectable}          from 'angular2/core';
import {
  Http, Response
  //, Headers, RequestOptions
}                             from 'angular2/http';

import {Observable}          from 'rxjs/Observable';
import {Subject}             from 'rxjs/Subject';

import {ProcesoInterface}             from '../proceso';

@Injectable()
export class ProcesoService {
  private _procesos$: Subject<ProcesoInterface[]>;
  private baseUrl;  // URL to web api
  private dataStore: {  // This is where we will store our data in memory
    procesos: ProcesoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {procesos: []};
    this._procesos$ = <Subject<ProcesoInterface[]>>new Subject();
  }

  get procesos$() {
    return this._procesos$.asObservable();
  }

  getAllByProcesoNumero(nProcesoNumero: number) {
    console.log(`Consulta de procesos por numero ${nProcesoNumero}`);
    // let body = JSON.stringify({
    //   type: 'CON',
    //   parameters: {
    //     'nom': ''
    //   }
    // });
    //    let body = model.toJSON();
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'sp-name': 'SP_VALIDA_DUPLICADO'
    // });
    // let options = new RequestOptions({headers: headers});
    //return this.http.post(this.baseUrl, body, options)
    return this.http.get('/app/cus234/duplicados.json')
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesos = data;
        this._procesos$.next(this.dataStore.procesos);
        console.log(this._procesos$);
      }, error => console.log('Could not load procesos.'));
  }

  getAllByCedula(nCedula: number) {
    return this.http.get(this.baseUrl)
      .map(res => <ProcesoInterface[]>res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  create(proceso: ProcesoInterface) {
    console.log('Entra al servicio');
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'prj_id':proceso.prj_id,
        'prj_litigacion':proceso.prj_litigacion,
        'prj_fechanotifica':`${proceso.prj_fechanotifica} 00:00:00`,
        'prj_numerobizagi':proceso.prj_numerobizagi,
        'prj_numerojuzgado':proceso.juzgado.prj_numerojuzgado,
        'tij_id':proceso.juzgado.tij_id,
        'dpt_idjuzgado':proceso.juzgado.depto,
        'mpi_idjuzgado':proceso.juzgado.ciudad,
        'reg_idjuzgado':proceso.regional.reg_id,
        'dei_id':proceso.despacho.dei_id,
        'prj_numeroradica':proceso.prj_numeroradica,
        'prj_23digitos':proceso.prj_23digitos,
        'tip_id':proceso.tipo.tip_id,
        'prj_clasificacionps':proceso.prj_clasificacionps,
        'prj_demandado':proceso.prj_demandado,
        'clt_id':proceso.clasTramites.clt_id,
        'tii_id':proceso.tipoInf.tii_id,
        'prj_relacioninforma':proceso.prj_relacioninforma,
        'prj_anoradicacion':proceso.prj_anoradicacion,
        'tiu_id':proceso.tiu_id,
        'tia_id':proceso.apoderado.tia_id,
        'prj_hechosproceso':proceso.prj_hechosproceso,
        'ead_id':proceso.actoAdmin.ead_id,
        'prj_numresolucion':proceso.prj_numresolucion,
        'cap_id':proceso.causa.cap_id,
        'mop_id':proceso.modPret.mop_id,
        'prp_id':proceso.pretension.prp_id,
        'clp_id':proceso.clasePret.clp_id,
        'prj_fechaadminisiondemanda':`${proceso.prj_fechaadminisiondemanda} 00:00:00`,
        'prj_cuantiaestimada':proceso.prj_cuantiaestimada,
        'prj_cantidaddemanda':proceso.prj_cantidaddemandante,
        'prj_entidadpublica':proceso.prj_entidadpublica,
        'esp_id':proceso.estadoProceso.esp_id,
        'prj_fechamodifica':`0000-00-00 00:00:00`,
        'prj_loginmodifica':'01',
        'prj_23digitosa':proceso.prj_23digitosa,
        'CC_Dem':proceso.CC_Dem,
        'Nombre_Dem':proceso.Nombre_Dem
      }
    });
    console.log(body);
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'sp-name': 'pr_Inserta_PSJudicial'
    // });
    // let options = new RequestOptions({headers: headers});
    // this.http.post(this.baseUrl, body, options)
    //   .map(response => response.json())
    //   .subscribe(data => console.log('Process created succesfully.'),
    //     error => console.log('Could not create a procces.'))
    // ;
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
