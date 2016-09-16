import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ApoderadoInterface} from '../model/apoderado';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class TipoApoderadoService {
  private _tiposApod$: Subject<ApoderadoInterface[]>;
  private baseUrl: string;
  private dataStore: {
    tiposApod: ApoderadoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {tiposApod: []};
    this._tiposApod$ = <Subject<ApoderadoInterface[]>>new Subject();
  }

  get tiposApod$() {
    return this._tiposApod$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoApoderado'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.tiposApod = data;
        this._tiposApod$.next(this.dataStore.tiposApod);
      }, error => console.log('Could not load tiposApod.'));
  }
}
