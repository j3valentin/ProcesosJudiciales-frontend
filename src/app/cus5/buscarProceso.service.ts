import {Injectable}          from 'angular2/core';
import {Http, Headers, RequestOptions}                from 'angular2/http';
import {Subject}             from 'rxjs/Subject';
import {BuscarProcesoInterface}    from './buscarProceso';

/**
 * Created by Reivaj on 03/09/2016.
 */

@Injectable()
export class BuscarProcesoService {
  private _procesosBusca$: Subject<BuscarProcesoInterface[]>;
  private baseUrl;  // URL to web api
  private dataStore: {  // This is where we will store our data in memory
    procesosBusca: BuscarProcesoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://127.0.0.1:8080/judiciales/api/sp/';
    this.dataStore = {procesosBusca: []};
    this._procesosBusca$ = <Subject<BuscarProcesoInterface[]>>new Subject();
  }

  get procesosBusca$() {
    return this._procesosBusca$.asObservable();
  }

  buscar(buscarProceso: BuscarProcesoInterface) {
    let body = JSON.stringify({
        type: 'SIN',
        parameters: {
          i_FechaInicio: `${buscarProceso.fechaInicio} 00:00:00`,
          i_FechaFin: `${buscarProceso.fechaFin} 00:00:00`,
          i_dei_id: buscarProceso.despacho.dei_id,
          i_dpt_id: buscarProceso.departamento.dpt_id,
          i_mpi_id: buscarProceso.municipio.mpi_id,
          i_reg_id: buscarProceso.regional.reg_id,
          i_prp_id: buscarProceso.pretension.prp_id,
          i_clp_id: buscarProceso.clasePretension.clp_id,
          i_tip_id: buscarProceso.tipoProceso.tip_id,
          i_Cod_Reparto: buscarProceso.codReparto,
          i_esp_id: buscarProceso.estadoProceso.esp_id,
          i_prj_numerobizagi: buscarProceso.i_prj_numerobizagi,
          i_per_nombre: buscarProceso.i_per_nombre,
          i_af_numerodocumento: buscarProceso.i_af_numerodocumento,
          i_23digitos: buscarProceso.i_23digitos,
          i_NomApo: buscarProceso.i_NomApo,
          i_prj_numresolucion: buscarProceso.i_prj_numresolucion
        }
      })
      ;
    console.log(body);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_ConsultaAvanzada'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.procesosBusca = data;
        this._procesosBusca$.next(this.dataStore.procesosBusca);
      }, error => console.log('Could not find process, error finding process.'));
  }
}

