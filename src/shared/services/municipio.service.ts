import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {MunicipioInterface} from '../model/municipio';

@Injectable()
export class MunicipioService {
  private _municipios$: Subject<MunicipioInterface[]>;
  private baseUrl: string;
  private dataStore: {
    municipios: MunicipioInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp';
    this.dataStore = {municipios: []};
    this._municipios$ = <Subject<MunicipioInterface[]>>new Subject();
  }

  get municipios$() {
    return this._municipios$.asObservable();
  }

  loadAllByDepto(dpt_id: string) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'p_dpt_id': dpt_id
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaMpio'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.municipios = data;
        this._municipios$.next(this.dataStore.municipios);
      }, error => console.log('Could not load municipios.'));
  }
}
