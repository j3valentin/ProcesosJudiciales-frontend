import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ModPretensionInterface} from '../modPretension';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ModPretensionService {
  private _modPretensiones$: Subject<ModPretensionInterface[]>;
  private baseUrl: string;
  private dataStore: {
    modPretensiones: ModPretensionInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {modPretensiones: []};
    this._modPretensiones$ = <Subject<ModPretensionInterface[]>>new Subject();
  }

  get modPretensiones$() {
    return this._modPretensiones$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaModalidadPretension'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.modPretensiones = data;
        this._modPretensiones$.next(this.dataStore.modPretensiones);
      }, error => console.log('Could not load modPretensiones.'));
  }
}
