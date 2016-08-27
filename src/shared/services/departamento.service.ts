import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {Departamento} from '../../app/cus234/departamento';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class DepartamentoService {
  private _departamentos$: Subject<Departamento[]>;
  private baseUrl: string;
  private dataStore: {
    departamentos: Departamento[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {departamentos: []};
    this._departamentos$ = <Subject<Departamento[]>>new Subject();
  }

  get departamentos$() {
    return this._departamentos$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDpto'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.departamentos = data;
        this._departamentos$.next(this.dataStore.departamentos);
      }, error => console.log('Could not load departamentos.'));
  }
}
