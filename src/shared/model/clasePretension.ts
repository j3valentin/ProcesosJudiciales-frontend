export interface ClasePretensionInterface {
  clp_id: number,
  clp_descripcion?: string
  prp_id?: number
}

export class ClasePretension implements ClasePretensionInterface {
  clp_id: number;
}
