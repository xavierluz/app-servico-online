import { ServicoItemModel } from "../../servico/servico-item/model/servico-item.model";

export class CompraItem{
    constructor(public servicoItemModel:ServicoItemModel,public quantidade:number = 1){

    }
    valor():number{
        return this.servicoItemModel.preco * this.quantidade;
    }
}