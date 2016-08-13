import {Injectable }     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {
  Headers,
  RequestOptions
} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Proceso}        from './proceso';
import {Juzgado}        from './juzgado';
import {Departamento}   from './departamento';
import {Regional}       from './regional';
import {TipoProceso}    from './tipoProceso';
import {TipoInformativo} from './tipoInformativo';
import {Despacho} from './despacho';
import {Clasificacion} from './clasificacion';
import {Causa} from './causa';
import {ModPretension} from './modPretension';
import {ActoAdmin} from './actoAdmin';
import {Municipio} from './municipio';
import {ProcesoDup} from './procesoDup';

@Injectable()
export class ProcesoService {
  private _apiUrl = 'http://localhost:8080/judiciales/api/sp';  // URL to web api

  constructor(private http: Http) {
  }

  getJuzgados() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipojuzgado'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Juzgado[]> res.json())
      //      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getDespachos() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDespachoInicial'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Despacho[]> res.json())
      //      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getDepartamentos() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaDpto'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Departamento[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getRegionales() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaRegional'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Regional[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getTipoProceso() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoProceso'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <TipoProceso[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getTipoInformativo() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaTipoInformativo'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <TipoInformativo[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getClasificacion() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaClasificacionTramite'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Clasificacion[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getCausas() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaCausaProceso'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Causa[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getModPretension() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaModalidadPretension'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <ModPretension[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getActosAdmin() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaEntidadActoAdministravo'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <ActoAdmin[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
  }

  getProcesosDup() {
    let body = JSON.stringify({
      type: 'CON',
      parameters: {}
    });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaProcespDuplicado'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <ProcesoDup[]> res.json())
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError)
      ;
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
    return this.http.post(this._apiUrl, body, options)
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
      'sp-name': 'pr_ConsultaDpto'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._apiUrl, body, options)
      .map(res => <Proceso[]>res.json().data)
      // .do(data => console.log(data)) // eyeball results in the console
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
