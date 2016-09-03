import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {EstadoProceso} from '../estadoProceso';


/**
 * Created by Reivaj on 27/08/2016.
 */

@Injectable()
export class EstadoProcesoService {
  private _estadosProceso$: Subject<EstadoProceso[]>;
  private baseUrl: string;
  private dataStore: {
    estadosProceso: EstadoProceso[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {estadosProceso: []};
    this._estadosProceso$ = <Subject<EstadoProceso[]>>new Subject();
  }

  get estadosProceso$() {
    return this._estadosProceso$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaEstadoProceso'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.estadosProceso = data;
        this._estadosProceso$.next(this.dataStore.estadosProceso);
      }, error => console.log('Could not load estadosProceso.'));
  }
}
