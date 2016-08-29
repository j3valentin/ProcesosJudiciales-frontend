export interface EstadoProcesoInterface {
    esp_id: number,
    esp_descripcion?: string
}

export class EstadoProceso implements EstadoProcesoInterface {
  esp_id: number;
}
