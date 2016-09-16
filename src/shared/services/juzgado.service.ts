import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {JuzgadoInterface} from '../model/juzgado';
import {WEBAPI_URL} from '../constantes';

/**
 * Created by fire on 20/08/2016.
 */
@Injectable()
export class JuzgadoService {
  private _juzgados$: Subject<JuzgadoInterface[]>;
  private baseUrl: string;
  private dataStore: {
    juzgados: JuzgadoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {juzgados: []};
    this._juzgados$ = <Subject<JuzgadoInterface[]>>new Subject();
  }

  get juzgados$() {
    return this._juzgados$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipojuzgado'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.juzgados = data;
        this._juzgados$.next(this.dataStore.juzgados);
      }, error => console.log('Could not load juzgados.'));
  }
}
