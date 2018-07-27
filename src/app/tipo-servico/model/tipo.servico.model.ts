interface TipoServicoModel{
  Id:string;
  Nome: string;
  Descricao: string;
  caminhoDaImage:string;
  Status:string;
  fileToUpload: File;
}

class TipoServico implements TipoServicoModel{
  Id: string;  
  Nome: string;
  Descricao: string;
  caminhoDaImage: string;
  Status: string;
  fileToUpload: File;
}

export {TipoServicoModel,TipoServico}