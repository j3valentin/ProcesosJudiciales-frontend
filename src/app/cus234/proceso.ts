import {JuzgadoInterface, Juzgado}   from './juzgado';
import {ApoderadoInterface, Apoderado} from './apoderado';
import {Beneficiario}  from './beneficiario';
import {TipoProcesoInterface, TipoProceso}  from './tipoProceso';
import {TipoInformativoInterface, TipoInformativo} from './tipoInformativo'
import {Regional} from './regional';
import {DespachoInterface, Despacho} from './despacho';
import {ClasificacionInterface, Clasificacion} from './clasificacion';
import {CausaInterace, Causa} from './causa';
import {PretensionInterface, Pretension} from './pretension';
import {ModPretensionInterface, ModPretension} from './modPretension';
import {ClasePretensionInterface, ClasePretencion} from './clasePretencion';
import {ActoAdminInterface, ActoAdmin} from './actoAdmin';
import {EstadoProcesoInterface, EstadoProceso} from './estadoProceso';

export interface ProcesoInterface {
  prj_fechanotifica?: string;
  prj_23digitos: number;
  prj_numerobizagi: string;
  tipo: TipoProcesoInterface;
  Nombre_Dem: string;
  CC_Dem: number;
  despacho?: DespachoInterface;
  estadoProceso?: EstadoProcesoInterface;
  prj_id?: number;
  prj_litigacion: string;
  juzgado?: JuzgadoInterface;
  prj_numeroradica?: string;
  prj_clasificacionps?: string;
  prj_demandado: number;
  apoderado?: ApoderadoInterface;
  clasTramites?: ClasificacionInterface;
  tipoInf?: TipoInformativoInterface;
  prj_relacioninforma?: string;
  regional?: Regional;
  prj_anoradicacion?: number;
  tiu_id?: number;
  prj_hechosproceso?: string;
  actoAdmin?: ActoAdminInterface;
  prj_numresolucion?: string;
  causa?: CausaInterace;
  modPret?: ModPretensionInterface;
  pretension?: PretensionInterface;
  clasePret?: ClasePretensionInterface;
  prj_fechaadminisiondemanda?: string;
  prj_cuantiaestimada?: number;
  afiliado?: Beneficiario;
  prj_cantidaddemandante: number;
  prj_entidadpublica?: string;
  apodeContra: ApoderadoInterface;
  prj_23digitosa?:  number;
}

export class Proceso implements ProcesoInterface {
  prj_cantidaddemandante: number;
  prj_demandado: number;
  prj_litigacion: string;
  apodeContra: Apoderado;
  causa: Causa;
  modPret: ModPretension;
  pretension: Pretension;
  clasePret: ClasePretencion;
  actoAdmin: ActoAdmin;
  apoderado: Apoderado;
  tipoInf: TipoInformativo;
  clasTramites: Clasificacion;
  regional: Regional;
  juzgado: Juzgado;
  prj_23digitos: number;
  prj_numerobizagi: string;
  tipo: TipoProceso;
  Nombre_Dem: string;
  CC_Dem: number;
  despacho: Despacho;
  estadoProceso: EstadoProceso;

  constructor() {
    //this.prj_fechanotifica = new Date().toISOString().subtring(0, 10);
    this.juzgado = new Juzgado();
    this.regional = new Regional();
    this.despacho = new Despacho();
    this.tipo = new TipoProceso();
    this.clasTramites = new Clasificacion();
    this.tipoInf = new TipoInformativo();
    this.apoderado = new Apoderado();
    this.actoAdmin = new ActoAdmin();
    this.causa = new Causa();
    this.modPret = new ModPretension();
    this.clasePret = new ClasePretencion();
    this.estadoProceso = new EstadoProceso();
    this.pretension = new Pretension();
    this.apodeContra = new Apoderado();

    this.prj_demandado = 1;
  }
}
