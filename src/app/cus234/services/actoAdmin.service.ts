import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ActoAdmin} from '../actoAdmin';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ActoAdminService {
  private _actosAdmin$: Subject<ActoAdmin[]>;
  private baseUrl: string;
  private dataStore: {
    actosAdmin: ActoAdmin[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {actosAdmin: []};
    this._actosAdmin$ = <Subject<ActoAdmin[]>>new Subject();
  }

  get actosAdmin$() {
    return this._actosAdmin$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaEntidadActoAdministravo'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.actosAdmin = data;
        this._actosAdmin$.next(this.dataStore.actosAdmin);
      }, error => console.log('Could not load actosAdmin.'));
  }
}
