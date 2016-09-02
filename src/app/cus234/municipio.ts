export interface MunicipioInterface {
  mpi_id: string,
  mpi_descripcion?: string,
  dpt_id?: number,
  reg_id?: number
}

export class Municipio implements MunicipioInterface {
  mpi_id: string;

  constructor() {
    this.mpi_id = '';
  }
}
