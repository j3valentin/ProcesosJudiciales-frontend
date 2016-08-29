export interface DespachoInterface {
  dei_id: number,
  dei_descripcion?: string,
  tij_id?: string,
  dpt_id?: string,
  mpi_id?: number,
  dei_consecutivoid?: string,
  dei_concatenado?: string
}

export class Despacho implements DespachoInterface {
  dei_id: number;
}
