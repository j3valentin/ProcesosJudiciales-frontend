import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ClasificacionInterface} from '../clasificacion';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ClasificacionService {
  private _clasificaciones$: Subject<ClasificacionInterface[]>;
  private baseUrl: string;
  private dataStore: {
    clasificaciones: ClasificacionInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {clasificaciones: []};
    this._clasificaciones$ = <Subject<ClasificacionInterface[]>>new Subject();
  }

  get clasificaciones$() {
    return this._clasificaciones$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaClasificacionTramite'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.clasificaciones = data;
        this._clasificaciones$.next(this.dataStore.clasificaciones);
      }, error => console.log('Could not load clasificaciones.'));
  }
}
