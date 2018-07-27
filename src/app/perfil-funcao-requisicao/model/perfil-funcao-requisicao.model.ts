class PerfilFuncaoRequisicaoModel {
    Type: string;
    ClaimsIdentity: RequisicoesIdentificadasModel;
    Properties: any;
    OriginalIssuer: string;
    Issuer: string;
    ValueType: string;
    Value: string;
    CustomSerializationData: number[];
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