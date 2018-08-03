import { EmpresaUsuarioFuncaoModel } from "../../shared/empresa-usuario/empresa-usuario-funcao.model";

interface ServicoModel {
    Id: number;
    Nome: string;
    Indicacao:string;
    Descricao: string;
    Preco: number;
    tipoServicoDominioId: number;
    Status: string;
    empresaUsuario: EmpresaUsuarioFuncaoModel
}
class Servico implements ServicoModel {
    Id: number;
    Nome: string;
    Indicacao: string;
    Descricao: string;
    Preco: number;
    tipoServicoDominioId: number;
    Status: string;
    empresaUsuario: EmpresaUsuarioFuncaoModel
}
export { ServicoModel, Servico}