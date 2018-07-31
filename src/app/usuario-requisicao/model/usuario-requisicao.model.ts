import { RequisicoesIdentificadasModel } from "../../perfil-funcao-requisicao/model/perfil-funcao-requisicao.model";

export class UsuarioRequisicaoModel {
    Type: string;
    Subject: RequisicoesIdentificadasModel;
    Properties: any[];
    OriginalIssuer: string;
    Issuer: string;
    ValueType: string;
    Value: string;
    CustomSerializationData: number[];
}