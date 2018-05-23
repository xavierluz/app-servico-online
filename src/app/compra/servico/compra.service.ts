import { CompraItem } from "../model/compra-item.model";

export class CompraService{
    itens:CompraItem[] =[];

    clear(){
        this.itens = [];
    }

    total():number{
        return this.itens.map(item => item.valor()).reduce((prev,value)=> prev + value, 0);
    }
    addItem(item:any){
        let foundItem = this.itens.find((mItem)=> mItem.categoriaServicoModel.id === item.id);
        if(foundItem){
            foundItem.quantidade = foundItem.quantidade + 1;
        }else{
            this.itens.push(new CompraItem(item));
        }
    }

    removeItem(item:any){
        this.itens.splice(this.itens.indexOf(item),1);
    }
}