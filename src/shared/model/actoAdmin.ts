export interface ActoAdminInterface {
    ead_id: number,
    ead_descripcion?: string
}

export class ActoAdmin implements ActoAdminInterface {
  ead_id: number;
}
