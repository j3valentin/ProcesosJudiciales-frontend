import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {Regional} from '../regional';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class RegionalService {
  private _regionales$: Subject<Regional[]>;
  private baseUrl: string;
  private dataStore: {
    regionales: Regional[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {regionales: []};
    this._regionales$ = <Subject<Regional[]>>new Subject();
  }

  get regionales$() {
    return this._regionales$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaRegional'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.regionales = data;
        this._regionales$.next(this.dataStore.regionales);
      }, error => console.log('Could not load regionales.'));
  }
}
