import { CompraItem } from "../model/compra-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../mensagem/notification.service";

@Injectable()
export class CompraService{
    itens:CompraItem[] =[];

    constructor(private notificationService:NotificationService){}

    clear(){
        this.itens = [];
    }

    total():number{
        return this.itens.map(item => item.valor()).reduce((prev,value)=> prev + value, 0);
    }
    addItem(item:any){
        let foundItem = this.itens.find((mItem)=> mItem.servicoItemModel.id === item.id);
        if(foundItem){
            this.incrimentaQuantidade(foundItem);
        }else{
            this.itens.push(new CompraItem(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.nome}`)
    }

    removeItem(item:CompraItem){
        this.itens.splice(this.itens.indexOf(item),1);
        this.notificationService.notify(`Você removeu o item ${item.servicoItemModel.nome}`)
    }

    incrimentaQuantidade(item:CompraItem){
        item.quantidade = item.quantidade + 1;
    }
    descrementaQuantidade(item:CompraItem){
        item.quantidade = item.quantidade - 1;
        if(item.quantidade === 0){
            this.removeItem(item);
        }
    }
 
}