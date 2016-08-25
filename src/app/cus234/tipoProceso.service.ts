import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {TipoProceso} from './tipoProceso';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class TipoProcesoService {
  private _tipoProcesos$: Subject<TipoProceso[]>;
  private baseUrl: string;
  private dataStore: {
    tipoProcesos: TipoProceso[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/judiciales/api/sp';
    this.dataStore = {tipoProcesos: []};
    this._tipoProcesos$ = <Subject<TipoProceso[]>>new Subject();
  }

  get tipoProcesos$() {
    return this._tipoProcesos$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoProceso'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.tipoProcesos = data;
        this._tipoProcesos$.next(this.dataStore.tipoProcesos);
      }, error => console.log('Could not load tipoProcesos.'));
  }
}
