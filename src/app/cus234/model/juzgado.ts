import {MunicipioInterface, Municipio} from '../../../shared/model/municipio';
import {Departamento} from '../../../shared/model/departamento';

export interface JuzgadoInterface {
  tij_id: string,
  tij_descripcion?: string,
  prj_numerojuzgado: number,
  tipo?: string,
  despacho?: string,
  depto: Departamento,
  ciudad: MunicipioInterface
}

export class Juzgado implements JuzgadoInterface {
  prj_numerojuzgado: number;
  ciudad: Municipio;
  depto: Departamento;
  tij_id: string;

  constructor() {
    this.depto = new Departamento();
    this.ciudad = new Municipio();
    this.prj_numerojuzgado = null;
  }
}
