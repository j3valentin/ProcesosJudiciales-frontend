export class Municipio {
  constructor(
    public mpi_id: string,
    public mpi_descripcion: string,
    public dpt_id?: number,
    public reg_id?: number
  ) { }
}
