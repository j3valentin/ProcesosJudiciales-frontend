import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {TipoInformativoInterface} from '../model/tipoInformativo';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class TipoInformativoService {
  private _tipoInformativos$: Subject<TipoInformativoInterface[]>;
  private baseUrl: string;
  private dataStore: {
    tipoInformativos: TipoInformativoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
    this.dataStore = {tipoInformativos: []};
    this._tipoInformativos$ = <Subject<TipoInformativoInterface[]>>new Subject();
  }

  get tipoInformativos$() {
    return this._tipoInformativos$.asObservable();
  }

  loadAllByClas(i_ctl_id: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        i_ctl_id: i_ctl_id
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoInformativo'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.tipoInformativos = data;
        this._tipoInformativos$.next(this.dataStore.tipoInformativos);
      }, error => console.log('Could not load tipoInformativos.'));
  }
}
