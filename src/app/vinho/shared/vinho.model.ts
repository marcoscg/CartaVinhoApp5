import { Uva } from 'src/app/uva/shared/uva.model';
import { TipoVinho } from 'src/app/tipo-vinho/shared/tipo-vinho.model';
import { Nacionalidade } from 'src/app/nacionalidade/shared/nacionalidade.model';

export class Vinho {
    id            : number;
    codigo        : string;
    nome          : string;
    descricao     : string;
    regiao        : string;
    safra         : string;
    valor         : number;
    valorPro      : number;
    disponivel    : boolean = true;
    manutencao    : boolean = false;
    tipo          : TipoVinho = new TipoVinho;
    uva           : Uva = new Uva;
    nacionalidade : Nacionalidade = new Nacionalidade;
    fotos         : [];
}