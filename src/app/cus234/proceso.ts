import {Juzgado}   from './juzgado';
import {Apoderado} from './apoderado';
import {Afiliado}  from './afiliado';
import {TipoProceso}  from './tipoProceso';
import {TipoInformativo} from './tipoInformativo'
import {Regional} from './regional';
import {Despacho} from './despacho';
import {Clasificacion} from './clasificacion';
import {Causa} from './causa';
import {ModPretension} from './modPretension';
import {ActoAdmin} from './actoAdmin';

export interface Proceso {
  notificacion: string;
  numero: number;
  bizagi: string;
  tipo: TipoProceso;
  demandate: string;
  cedula: number;
  despacho: Despacho;
  estado: string;
  id?: number;
  litigar?: number;
  fecha?: string;
  juzgado?: Juzgado;
  numRadi?: string;
  clasificacion?: Clasificacion;
  demandado?: string;
  apoderado?: Apoderado;
  clasTramites?: string;
  tipoInf?: TipoInformativo;
  relacion?: string;
  regional?: Regional;
  anioRadi?: string;
  tipoUni?: string;
  hechos?: string;
  actoAdmin?: ActoAdmin;
  numRes?: string;
  causa?: Causa;
  modPret?: ModPretension;
  pretencion?: string;
  clasePret?: string;
  fechaDem?: string;
  cuantia?: string;
  afiliado?: Afiliado;
  canDemandantes?: number;
  respuesta?: string;
  apodeContra?: Apoderado;
}
