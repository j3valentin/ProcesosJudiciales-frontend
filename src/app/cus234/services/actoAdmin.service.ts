import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {ActoAdminInterface} from '../actoAdmin';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ActoAdminService {
  private _actosAdmin$: Subject<ActoAdminInterface[]>;
  private baseUrl: string;
  private dataStore: {
    actosAdmin: ActoAdminInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {actosAdmin: []};
    this._actosAdmin$ = <Subject<ActoAdminInterface[]>>new Subject();
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
