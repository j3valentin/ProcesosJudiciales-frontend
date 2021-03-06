import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {DespachoInterface} from '../model/despacho';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class DespachoService {
  private _despachos$: Subject<DespachoInterface[]>;
  private baseUrl: string;
  private dataStore: {
    despachos: DespachoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {despachos: []};
    this._despachos$ = <Subject<DespachoInterface[]>>new Subject();
  }

  get despachos$() {
    return this._despachos$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDespachoInicial'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.despachos = data;
        this._despachos$.next(this.dataStore.despachos);
      }, error => console.log('Could not load despachos.'));
  }
}
