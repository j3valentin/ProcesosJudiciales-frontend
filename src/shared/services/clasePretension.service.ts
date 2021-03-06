import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ClasePretensionInterface} from '../model/clasePretension';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ClasePretensionService {
  private _clasesPretensiones$: Subject<ClasePretensionInterface[]>;
  private baseUrl: string;
  private dataStore: {
    clasesPretensiones: ClasePretensionInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {clasesPretensiones: []};
    this._clasesPretensiones$ = <Subject<ClasePretensionInterface[]>>new Subject();
  }

  get clasesPretensiones$() {
    return this._clasesPretensiones$.asObservable();
  }

  loadAllByPreten(prp_id: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'p_prp_id': prp_id
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaClase_Pretension'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.clasesPretensiones = data;
        this._clasesPretensiones$.next(this.dataStore.clasesPretensiones);
      }, error => console.log('Could not load clasesPretensiones.'));
  }
}
