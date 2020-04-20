import { foto } from '../../shared/model/foto.model';

export class TipoVinho {
    id         : number;
    nome       : string;
    descricao  : string;
    disponivel : boolean = true;
    top10      : boolean = false;
    qt_vinho   : number;
    foto       : Array<foto>;
}