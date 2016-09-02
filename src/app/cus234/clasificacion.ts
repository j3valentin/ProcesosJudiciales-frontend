export interface ClasificacionInterface {
  clt_id: number,
  clt_descripcion?: string
}

export class Clasificacion implements ClasificacionInterface {
  clt_id: number;

  constructor() {
    this.clt_id = '';
  }
}
