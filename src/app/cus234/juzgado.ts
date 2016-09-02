import {MunicipioInterface, Municipio} from './municipio';
import {Departamento} from './departamento';

export interface JuzgadoInterface {
  tij_id: string,
  tij_descripcion?: string,
  prj_numerojuzgado?: number,
  tipo?: string,
  despacho?: string,
  depto?: Departamento,
  ciudad?: MunicipioInterface
}

export class Juzgado implements JuzgadoInterface {
  tij_id: string;
  ciudad: Municipio;

  constructor() {
    this.ciudad = new Municipio();
  }
}
