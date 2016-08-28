import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Proceso} from '../proceso';
import {Juzgado} from '../juzgado';
import {Municipio} from '../municipio';

@Injectable()
export class ProcesoService {
  private baseUrl;  // URL to web api
  private dataStore: {  // This is where we will store our data in memory
    juzgados: Juzgado[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp';
    this.dataStore = {juzgados: []};
  }

  getMunicipiosByDto(p_dpt_id: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'nom': ''
      }
    });
    //    let body = model.toJSON();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaMpio'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(res => <Municipio[]>res.json().data)
      // .do(data => console.log(data)) // eyeball results in the console
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
      'sp-name': 'SP_VALIDA_DUPLICADO'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(res => <Proceso[]>res.json().data)
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getAllByCedula(nCedula: number) {
    return this.http.get(this.baseUrl)
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
