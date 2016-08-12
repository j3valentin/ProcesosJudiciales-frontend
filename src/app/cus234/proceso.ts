import {Juzgado}   from './juzgado';
import {Apoderado} from './apoderado';
import {Afiliado}  from './afiliado';

export interface Proceso {
  notificacion: string;
  numero: number;
  bizagi: string;
  tipo: string;
  demandate: string;
  cedula: number;
  despacho: string;
  estado: string;
  id?: number;
  litigar?: number;
  fecha?: string;
  juzgado?: Juzgado;
  numRadi?: string;
  clasificacion?: string;
  demandado?: string;
  apoderado?: Apoderado;
  clasTramites?: string;
  tipoInf?: string;
  relacion?: string;
  regional?: string;
  anioRadi?: string;
  tipoUni?: string;
  hechos?: string;
  actoAdmin?: string;
  numRes?: string;
  causa?: string;
  modPret?: string;
  pretencion?: string;
  clasePret?: string;
  fechaDem?: string;
  cuantia?: string;
  afiliado?: Afiliado;
  canDemandantes?: number;
  respuesta?: string;
  apodeContra?: Apoderado;
}
