import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {TipoUnidadInterface} from '../model/tipoUnidad';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class TipoUnidadService {
  private _tiposUnidad$: Subject<TipoUnidadInterface[]>;
  private baseUrl: string;
  private dataStore: {
    tiposUnidad: TipoUnidadInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {tiposUnidad: []};
    this._tiposUnidad$ = <Subject<TipoUnidadInterface[]>>new Subject();
  }

  get tiposUnidad$() {
    return this._tiposUnidad$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoUnidad'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.tiposUnidad = data;
        this._tiposUnidad$.next(this.dataStore.tiposUnidad);
      }, error => console.log('Could not load tiposUnidad.'));
  }
}
