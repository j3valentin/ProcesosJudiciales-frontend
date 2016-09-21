import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {ProcesoDup} from '../model/procesoDup';
import {WEBAPI_URL} from '../constantes';


/**
 * Created by Reivaj on 25/08/2016.
 */

@Injectable()
export class ProcesoDupService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = WEBAPI_URL;
  }

  getAllByProcesoNumero(nProcesoNumero: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'prj_23Digitosa': nProcesoNumero
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoProceso'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(function (response) {
        let json = response.json();
        return <ProcesoDup[]>json;
      })
      .catch(this.handleError)
  }

  getAllByDocumento(nDocumento: number) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'cc_Dem': nDocumento
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoCedula'
    });
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(function (response) {
        let json = response.json();
        return <ProcesoDup[]>json;
      })
      .catch(this.handleError)
  }

  getAllByNombre(nombre: string) {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {
        'Nombre_Dem': nombre
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDuplicadoDemandante'
    });
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(function (response) {
        let json = response.json();
        return <ProcesoDup[]>json;
      })
      .catch(this.handleError)
  }

  update(procesoDup: ProcesoDup) {
    let body = JSON.stringify({
      type: 'SIN',
      parameters: {
        prj_23Digitosa: procesoDup.prj_23digitosa,
        tip_id: procesoDup.tip_id,
        Nombre_Dem: procesoDup.per_Nombre,
        cc_Dem: procesoDup.af_numerodocumento,
        Dei_id: procesoDup.dei_id,
        esp_id: 1,//TODO: ajustar sp de consulta de duplicados para obtener el esp_id (id_estado)
        prj_id: procesoDup.prj_id,
        loginmodifica: ''
      }
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ActualizaPsJudicial'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(response => <ProcesoDup[]>response.json().data)
      .do(data => console.log(data))
      .catch(this.handleError)
      ;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}


