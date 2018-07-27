import { Injectable } from '@angular/core';

import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CompraService } from '../../compra/servico/compra.service';
import { CompraItem } from '../../compra/model/compra-item.model';
import { OrdemModel,OrdemItemModel } from '../model/ordem.model';
import { MEAT_API } from '../../constantes.api';

@Injectable()
export class OrdemService{
    constructor(private compraService:CompraService, private http:Http){}

    compraItens():CompraItem[]{
        return this.compraService.itens;
    }

    incrimentaQuantidade(item:CompraItem){
        this.compraService.incrimentaQuantidade(item);
    }
    descrementaQuantidade(item:CompraItem){
        this.compraService.descrementaQuantidade(item);
    }
    remover(item:CompraItem){
      this.compraService.removeItem(item);
    }
    valorItens():number{
      return this.compraService.total();
    }
    createOrdem(ordem:OrdemModel):Observable<string>{
      const headers = new Headers();
      let pagamento = JSON.stringify(ordem);
      console.log(pagamento);
      console.log(ordem);
      headers.append('Content-Type','application/json');
      return this.http.post(`${MEAT_API}/Pagamento`,
                                JSON.stringify(ordem),
                                new RequestOptions({headers:headers}))
                      .map(response=> response.json()).map(ordem => ordem.numeroDocumento);

    }
    clear(){
      this.compraService.clear();
    }
   
}
