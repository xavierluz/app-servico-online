import { ClienteModel } from "./cliente.model";

export interface ContatoModel {
    Id: string;
    Ddd: string;
    Telefone: string;
    Twitter: string;
    Google: string;
    Facebook: string;
    WhatsApp: string;
    Email: string;
    ClienteId: string;
    Cliente: ClienteModel;
}