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
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
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
    // let body = model.toJSON();
    // return this.http.get('/app/cus234/duplicados.json')
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosDup = data;
        this._procesosDup$.next(this.dataStore.procesosDup);
      }, error => console.log('Could not load procesosDup.'));
  }
}
