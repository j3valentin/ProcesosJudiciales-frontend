import {Injectable}          from 'angular2/core';
import {
  Http,
  //, Response ,
  Headers, RequestOptions
}                            from 'angular2/http';

// import {Observable}          from 'rxjs/Observable';
import {Subject}             from 'rxjs/Subject';

import {ProcesoInterface}    from '../proceso';

@Injectable()
export class ProcesoService {
  private _procesos$: Subject<ProcesoInterface[]>;
  private baseUrl;  // URL to web api
  private dataStore: {  // This is where we will store our data in memory
    procesos: ProcesoInterface[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://firux.ddns.net:8080/judiciales/api/sp/inserta-reparto';
    this.dataStore = {procesos: []};
    this._procesos$ = <Subject<ProcesoInterface[]>>new Subject();
  }

  create(proceso: ProcesoInterface) {
    console.log(proceso);
    console.log('Entra al servicio');
    let body = JSON.stringify({
      type: 'CON',
      outParameters: ['out_prj_id'],
      parameters: {
        'prj_litigacion':proceso.prj_litigacion,
        'prj_fechanotifica':`${proceso.prj_fechanotifica} 00:00:00`,
        'prj_numerobizagi':proceso.prj_numerobizagi,
        'prj_numerojuzgado':proceso.juzgado.prj_numerojuzgado,
        'tij_id':proceso.juzgado.tij_id,
        'dei_id':proceso.despacho.dei_id,
        'dpt_idjuzgado':proceso.juzgado.depto.dpt_id,
        'mpi_idjuzgado':proceso.juzgado.ciudad.mpi_id,
        'prj_numeroradica':proceso.prj_numeroradica,
        'prj_23digitos':proceso.prj_23digitos,
        'tip_id':proceso.tipo.tip_id,
        'prj_clasificacionps':proceso.prj_clasificacionps,
        'ccdemandante':proceso.CC_Dem,
        'per_Nombre':proceso.Nombre_Dem,
        'prj_demandado':proceso.prj_demandado,
        'ApoderadoAct':proceso.apoderado.nombre,
        'CCApoderadoAct':proceso.apoderado.cedula,
        'ApoderadoTarPro':proceso.apoderado.tarjeta,
        'clt_id':proceso.clasTramites.clt_id,
        'tii_id':proceso.tipoInf.tii_id,
        'prj_relacioninforma':proceso.prj_relacioninforma,
        'reg_idjuzgado':proceso.regional.reg_id,
        'prj_anoradicacion':proceso.prj_anoradicacion,
        // 'tiu_id':proceso.tiu_id,
        // 'tia_id':proceso.apoderado.tia_id,
        'tiu_id':1,
        'tia_id':1,
        'prj_hechosproceso':proceso.prj_hechosproceso,
        'ead_id':proceso.actoAdmin.ead_id,
        'prj_numresolucion':proceso.prj_numresolucion,
        'cap_id':proceso.causa.cap_id,
        'mop_id':proceso.modPret.mop_id,
        'prp_id':proceso.pretension.prp_id,
        'clp_id':proceso.clasePret.clp_id,
        'prj_fechaadminisiondemanda':`${proceso.prj_fechaadminisiondemanda} 00:00:00`,
        'prj_cuantiaestimada':proceso.prj_cuantiaestimada,
        'NomAfiliado':'',
        'CCAfiliado':null,
        'NomBenef1':'',
        'CCBenf1':null,
        'NomBenef2':'',
        'CCBenf2':null,
        'NomBenef3':'',
        'CCBenf3':null,
        'NomBenef4':'',
        'CCBenf4':null,
        'NomBenef5':'',
        'CCBenf5':null,
        'prj_cantidaddemandante':proceso.prj_cantidaddemandante,
        'prj_entidadpublica':proceso.prj_entidadpublica,
        'NomApoContra':proceso.apodeContra.nombre,
        'CCApoContra':proceso.apodeContra.cedula,
        // 'esp_id':proceso.estadoProceso.esp_id,
        'esp_id':1,
        'loginmodifica':''
      }
    });
    console.log(body);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sp-name': 'pr_InsertaReparto'
    });
    let options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl, body, options)
      .map(response => response.json())
      .subscribe(data => console.log('Process created succesfully.'),
        error => console.log('Could not create a procces.'))
    ;
  }

  // private handleError(error: Response) {
  //   // in a real world app, we may send the error to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
}
