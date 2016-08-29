export interface ApoderadoInterface {
  tia_id: string
  nombre?: string,
  cedula?: number,
  tarjeta?: string,
}

export class Apoderado implements ApoderadoInterface {
  tia_id: string;
}
