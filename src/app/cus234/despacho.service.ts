import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {Despacho} from './despacho';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class DespachoService {
  private _despachos$: Subject<Despacho[]>;
  private baseUrl: string;
  private dataStore: {
    despachos: Despacho[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/judiciales/api/sp';
    this.dataStore = {despachos: []};
    this._despachos$ = <Subject<Despacho[]>>new Subject();
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
