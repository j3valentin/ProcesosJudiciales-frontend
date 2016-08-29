export interface CausaInterace {
  cap_id: number,
  cap_descripcion?: string
}

export class Causa implements CausaInterace {
  cap_id: number;
}
