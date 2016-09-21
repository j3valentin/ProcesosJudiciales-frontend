import {Pipe} from 'angular2/core'
import {ProcesoDup} from '../../../shared/model/procesoDup';

/*
 * Filtra por Cedula el proceso recibido
 * Uso:
 *   Array Procesos | cc:No.Cc
 * Ejemplo:
 *   {{ Proceso[] | cc:1234567890}}
 */

@Pipe({name: 'cc'})
export class FiltroPorCc {
  transform(procesos: ProcesoDup[], cc: number): ProcesoDup[] {
    return procesos.filter(proceso=>proceso.af_numerodocumento.toString().indexOf(cc[0]) !== -1);
  }
}

/*
 * Filtra por Nombre el proceso recibido
 * Uso:
 *   Array Procesos | nombre:Nombre
 * Ejemplo:
 *   {{ Proceso[] | nombre:Jhon}}
 */

@Pipe({name: 'nombre'})
export class FiltroPorNombre {
  transform(procesos: ProcesoDup[], nombre: string): ProcesoDup[] {
    let lower =nombre[0].toLocaleLowerCase();
    return procesos.filter(proceso=>proceso.per_Nombre.toLocaleLowerCase().indexOf(lower) !== -1);
  }
}
