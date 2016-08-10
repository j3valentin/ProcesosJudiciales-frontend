export class Juzgado {
    constructor(
        public tij_id: string,
        public tij_descripcion: string,
        public numero?: number,
        public tipo?: string,
        public despacho?: string,
        public depto?: string,
        public ciudad?: string
    ) { }
}
