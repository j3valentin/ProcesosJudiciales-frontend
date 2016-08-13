export class Despacho {
    constructor(
        public dei_id: number,
        public dei_descripcion: string,
        public dpt_id?: number,
        public mpi_id?: number,
        public tij_id?: number,
        public dei_consecutivoid?: string,
        public dei_concatenado?: string
    ) { }
}
