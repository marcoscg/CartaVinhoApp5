import { foto } from '../../shared/model/foto.model';

export class Nacionalidade {
    id         : number;
    pais       : string;
    disponivel : boolean = true;
    qt_vinho   : number;
    foto       : Array<foto>;
}