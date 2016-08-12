export class Despacho {
    constructor(
        public dei_id: string,
        public dei_descripcion: string,
        public dpt_id?: string,
        public mpi_id?: number,
        public tij_id?: string,
        public dei_consecutivoid?: string,
        public dei_concatenado?: string
    ) { }
}
