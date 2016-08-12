import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers,
        RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Proceso}        from './proceso';
import {Juzgado}        from './juzgado';

@Injectable()
export class ProcesoService {
  private _apiUrl = 'http://localhost:8080/judiciales/api/sp';  // URL to web api

  constructor(private http: Http) { }

  getJuzgados() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipojuzgado'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Juzgado[]> res.json())
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getAllByProcesoNumero(nProcesoNumero: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'nom': ''
      }
    });
    //    let body = model.toJSON();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDpto'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Proceso[]>res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getAllByCedula(nCedula: number) {
    return this.http.get(this._apiUrl)
      .map(res => <Proceso[]>res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
