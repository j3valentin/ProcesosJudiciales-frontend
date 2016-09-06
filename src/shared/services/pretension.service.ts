import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {PretensionInterface} from '../model/pretension';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class PretensionService {
  private _pretensiones$: Subject<PretensionInterface[]>;
  private baseUrl: string;
  private dataStore: {
    pretensiones: PretensionInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {pretensiones: []};
    this._pretensiones$ = <Subject<PretensionInterface[]>>new Subject();
  }

  get pretensiones$() {
    return this._pretensiones$.asObservable();
  }

  loadAllByCausa(cap_id: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'p_cap_id': cap_id
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaPretencion'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.pretensiones = data;
        this._pretensiones$.next(this.dataStore.pretensiones);
      }, error => console.log('Could not load pretensiones.'));
  }
}
