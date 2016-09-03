import {Causa, CausaInterace} from '../../shared/model/causa';
import {ClasePretensionInterface, ClasePretension} from '../../shared/model/clasePretension';
import {DespachoInterface, Despacho} from '../../shared/model/despacho';
import {Departamento} from '../../shared/model/departamento';
import {EstadoProceso} from '../../shared/model/estadoProceso';
import {MunicipioInterface, Municipio} from '../../shared/model/municipio';
import {Regional} from '../../shared/model/regional';
import {PretensionInterface, Pretension} from '../../shared/model/pretension';
import {TipoProcesoInterface, TipoProceso} from '../../shared/model/tipoProceso';

/**
 * Created by Reivaj on 03/09/2016.
 */

export interface BuscarProcesoInterface {
  fechaInicio?: string;
  fechaFin?: string;
  causa?: CausaInterace;
  despacho?: DespachoInterface;
  municipio?: MunicipioInterface;
  departamento?: Departamento;
  tipoProceso?: TipoProcesoInterface;
  regional?: Regional;
  pretension?: PretensionInterface;
  clasePretension?: ClasePretensionInterface;
  codReparto?: number;
  estadoProceso?: EstadoProceso;
  i_prj_numerobizagi?: string;
  i_per_nombre?: string;
  i_af_numerodocumento?: number;
  i_23digitos?: number;
  i_NomApo?: string;
  i_prj_numresolucion?: string;
}

export class BuscarProceso implements BuscarProcesoInterface {
  fechaInicio: string;
  fechaFin: string;
  causa:Causa;
  despacho: Despacho;
  municipio: Municipio;
  departamento: Departamento;
  tipoProceso: TipoProceso;
  regional: Regional;
  pretension: Pretension;
  clasePretension: ClasePretension;
  codReparto: number;
  estadoProceso: EstadoProceso;
  i_prj_numerobizagi: string;
  i_per_nombre: string;
  i_af_numerodocumento: number;
  i_23digitos: number;
  i_NomApo: string;
  i_prj_numresolucion: string;


  constructor() {
    this.causa = new Causa();
    this.clasePretension = new ClasePretension();
    this.departamento = new Departamento;
    this.despacho = new Despacho();
    this.estadoProceso = new EstadoProceso();
    this.municipio = new Municipio;
    this.regional = new Regional();
    this.pretension = new Pretension();
    this.tipoProceso = new TipoProceso();
  }
}


