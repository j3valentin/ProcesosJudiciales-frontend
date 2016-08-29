export interface PretensionInterface {
  prp_id: number,
  mop_descripcion?: string
  cap_id?: number,
}

export class Pretension implements PretensionInterface {
  prp_id: number;
}
