class OrdemModel {
  constructor(
    public nome:string,
    public telefone:string,
    public email:string,
    public formaPagamento:string,
    public descricao:string,
    public status:string,
    public numeroDocumento:string,
    public pagamentoItemViewModels:OrdemItemModel[]=[]
  ){}
}
class OrdemItemModel{
  constructor(public quantidade:number,public servicoDominioId:string,public status:string){}
}

export {OrdemModel,OrdemItemModel}
