export interface TipoInformativoInterface {
  tii_id: number,
  tii_descripcion?: string
}

export class TipoInformativo implements TipoInformativoInterface {
  tii_id: number;
}
