import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {EstadoProcesoInterface} from '../estadoProceso';


/**
 * Created by Reivaj on 27/08/2016.
 */

@Injectable()
export class EstadoProcesoService {
  private _estadoProcesoss$: Subject<EstadoProcesoInterface[]>;
  private baseUrl: string;
  private dataStore: {
    estadoProcesos: EstadoProcesoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {estadoProcesos: []};
    this._estadoProcesoss$ = <Subject<EstadoProcesoInterface[]>>new Subject();
  }

  get estadoProcesos$() {
    return this._estadoProcesoss$.asObservable();
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
        this.dataStore.estadoProcesos = data;
        this._estadoProcesoss$.next(this.dataStore.estadoProcesos);
      }, error => console.log('Could not load estadoProcesos.'));
  }
}
