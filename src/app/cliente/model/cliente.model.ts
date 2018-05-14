import { ContatoModel } from "./contato.mode";

export interface ClienteModel{
    Id:string;
    Nome:string;
    Genero:string;
    Contatos:ContatoModel[];
}
