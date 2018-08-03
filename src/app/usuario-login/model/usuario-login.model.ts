import { EmpresaUsuarioFuncaoModel } from "../../shared/empresa-usuario/empresa-usuario-funcao.model";

export class UsuarioLoginModel{
    LoginProvider:string;
    ProviderKey:string;
    ProviderDisplayName:string;
    EmpresaUsuario: EmpresaUsuarioFuncaoModel;
}