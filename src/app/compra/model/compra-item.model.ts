import { CategoriaServicoModel } from "../../categoria/model/categoria-servico.model";

export class CompraItem{
    constructor(public categoriaServicoModel:CategoriaServicoModel,public quantidade:number = 1){

    }
    valor():number{
        return this.categoriaServicoModel.valor * this.quantidade;
    }
}