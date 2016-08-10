import {Juzgado}        from './juzgado';
import {Apoderado}        from './apoderado';
import {Afiliado}        from './afiliado';
export class Proceso {
    constructor(
        public notificacion: string,
        public numero: number,
        public bizagi: string,
        public tipo: string,
        public demandate: string,
        public cedula: number,
        public despacho: string,
        public estado: string,
        public id?: number,
        public litigar?: number,
        public fecha?: string,
        public fizagi?: string,
        public juzgado?: Juzgado,
        public numRadi?: string,
        public clasificacion?: string,
        public demandado?: string,
        public apoderado?: Apoderado,
        public clasTramites?: string,
        public tipoInf?: string,
        public relacion?: string,
        public regional?: string,
        public anioRadi?: string,
        public tipoUni?: string,
        public hechos?: string,
        public actoAdmin?: string,
        public numRes?: string,
        public causa?: string,
        public modPret?: string,
        public pretencion?: string,
        public clasePret?: string,
        public fechaDem?: string,
        public cuantia?: string,
        public afiliado?: Afiliado,
        public demandantes?: number,
        public respuesta?: string,
        public apodeContra?: Apoderado
    ) { }
}
