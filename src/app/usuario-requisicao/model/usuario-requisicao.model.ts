import { RequisicoesIdentificadasModel } from "../../perfil-funcao-requisicao/model/perfil-funcao-requisicao.model";
import { EmpresaUsuarioFuncaoModel } from "../../shared/empresa-usuario/empresa-usuario-funcao.model";

export class UsuarioRequisicaoModel {
    Type: string;
    Subject: RequisicoesIdentificadasModel;
    Properties: any[];
    OriginalIssuer: string;
    Issuer: string;
    ValueType: string;
    Value: string;
    CustomSerializationData: number[];
    ClaimsIdentity: RequisicoesIdentificadasModel;
    EmpresaUsuario: EmpresaUsuarioFuncaoModel;
}