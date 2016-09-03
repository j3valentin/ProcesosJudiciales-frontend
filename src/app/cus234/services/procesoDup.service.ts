import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ProcesoDup} from '../procesoDup';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ProcesoDupService {
  private _procesosDup$: Subject<ProcesoDup[]>;
  private baseUrl: string;
  private dataStore: {
    procesosDup: ProcesoDup[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {procesosDup: []};
    this._procesosDup$ = <Subject<ProcesoDup[]>>new Subject();
  }

  get procesosDup$() {
    return this._procesosDup$.asObservable();
  }

  getAllByProcesoNumero(nProcesoNumero: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'prj_23Digitosa': nProcesoNumero
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoProceso'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosDup = data;
        this._procesosDup$.next(this.dataStore.procesosDup);
      }, error => console.log('Could not load procesosDup.'));
  }

  getAllByDocumento(nDocumento: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'cc_Dem': nDocumento
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoCedula'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
    // let body = model.toJSON();
    // return this.http.get('/app/cus234/duplicados.json')
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosDup = data;
        this._procesosDup$.next(this.dataStore.procesosDup);
      }, error => console.log('Could not load procesosDup.'));
  }

  getAllByNombre(nombre: string) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'Nombre_Dem': nombre
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoDemandante'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosDup = data;
        this._procesosDup$.next(this.dataStore.procesosDup);
      }, error => console.log('Could not load procesosDup.'));
  }

  update(procesoDup : ProcesoDup) {
    let body = JSON.stringify({
      type: 'SIN',
      parameters: {
        prj_23Digitosa: procesoDup.prj_23digitosa,
        tip_id: procesoDup.tip_id,
        Nombre_Dem: procesoDup.per_Nombre,
        cc_Dem: procesoDup.af_numerodocumento,
        Dei_id: procesoDup.dei_id,
        esp_id: 1,//TODO: ajustar sp de consulta de duplicados para obttener el esp_id (id_estado)
        prj_id: procesoDup.prj_id,
        loginmodifica: ''
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ActualizaPsJudicial'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosDup = data;
        this._procesosDup$.next(this.dataStore.procesosDup);
      }, error => console.log('Could not update procesoDup.'));
  }
}
