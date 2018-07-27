class EmpresaModel{
    Id:string;
    CnpjCpf:string;
    Nome:string;
    NomeFantasia:string;
    Email:string;
    Status:string;
    EmpresaUsuario:EmpresaUsuarioModel[];
    CaminhoArquivo:CaminhoArquivoModel;
}
class CaminhoArquivoModel{
    Id:number;
    CaminhoBaseImagem:string;
    CaminhoBaseDownload:string;
    EmpresaId:string;
    Status:string;
    Empresa:EmpresaModel;
}
class EmpresaUsuarioModel{
    EmpresaId:string;
    Empresa:EmpresaModel;
    UsuarioId:string;
    Key:string;
    Status:string;
}
class EmpresaTableModel{
    Id:string;
    CnpjCpf:string;
    Nome:string;
    NomeFantasia:string;
    Email:string;
    Status:string;
}
export{EmpresaModel,CaminhoArquivoModel,EmpresaUsuarioModel,EmpresaTableModel}