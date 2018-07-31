import { EmpresaUsuarioFuncaoModel } from "../../shared/empresa-usuario/empresa-usuario-funcao.model";

class PerfilFuncaoRequisicaoModel {
    Type: string;
    ClaimsIdentity: RequisicoesIdentificadasModel;
    OriginalIssuer: string;
    Issuer: string;
    ValueType: string;
    Value: string;
    CustomSerializationData: number[];
    EmpresaUsuario: EmpresaUsuarioFuncaoModel;
    Properties:any;
}
class RequisicoesIdentificadasModel {
    Name: string;
    Label: string;
    IsAuthenticated: boolean;
    Claims: PerfilFuncaoRequisicaoModel[];
    BootstrapContext: any;
    AuthenticationType: string;
    Actor: RequisicoesIdentificadasModel;
    RoleClaimType: string;
    NameClaimType: string;
    CustomSerializationData: number[];
}

export { PerfilFuncaoRequisicaoModel, RequisicoesIdentificadasModel}