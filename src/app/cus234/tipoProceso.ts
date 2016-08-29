export interface TipoProcesoInterface {
  tip_id: number,
  tip_descripcion?: string
}

export class TipoProceso implements TipoProcesoInterface {
  tip_id: number;
}
