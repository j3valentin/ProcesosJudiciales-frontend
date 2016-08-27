import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Subject} from 'rxjs/Subject';
import {TipoInformativo} from '../tipoInformativo';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class TipoInformativoService {
  private _tipoInformativos$: Subject<TipoInformativo[]>;
  private baseUrl: string;
  private dataStore: {
    tipoInformativos: TipoInformativo[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {tipoInformativos: []};
    this._tipoInformativos$ = <Subject<TipoInformativo[]>>new Subject();
  }

  get tipoInformativos$() {
    return this._tipoInformativos$.asObservable();
  }

  loadAll() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
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
