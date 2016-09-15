export interface TipoUnidadInterface {
  tiu_id: number,
  tiu_descripcion?: string
}

export class TipoUnidad implements TipoUnidadInterface {
  tiu_id: number;
}
