export interface ModPretensionInterface {
  mop_id: number,
  mop_descripcion?: string
}

export class ModPretension implements ModPretensionInterface {
  mop_id: number;
}
