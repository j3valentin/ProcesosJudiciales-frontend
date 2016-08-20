import {Municipio} from './municipio';
import {Departamento} from './departamento';

export interface Juzgado {
  tij_id: string,
  tij_descripcion: string,
  numero?: number,
  tipo?: string,
  despacho?: string,
  depto?: Departamento,
  ciudad?: Municipio
}
