import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {CausaInterace} from '../causa';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class CausaService {
  private _causas$: Subject<CausaInterace[]>;
  private baseUrl: string;
  private dataStore: {
    causas: CausaInterace[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {causas: []};
    this._causas$ = <Subject<CausaInterace[]>>new Subject();
  }

  get causas$() {
    return this._causas$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaCausaProceso'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.causas = data;
        this._causas$.next(this.dataStore.causas);
      }, error => console.log('Could not load causas.'));
  }
}
