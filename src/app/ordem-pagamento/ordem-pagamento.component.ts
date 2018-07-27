import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RadioOption } from '../shared/radio/model/radio-option.model';
import { OrdemService } from './servico/ordem.service';
import { CompraItem } from '../compra/model/compra-item.model';
import {OrdemModel,OrdemItemModel} from './model/ordem.model'
@Component({
  selector: 'app-ordem-pagamento',
  templateUrl: './ordem-pagamento.component.html',
  styleUrls: ['./ordem-pagamento.component.css']
})
export class OrdemPagamentoComponent implements OnInit {
  paymentOptions:RadioOption[]=[
    {label:'Dinheiro', value:'DHR'},
    {label:'Cheque', value:'CEQ'},
    {label:'Cartão de Débito', value:'CAD'}
 ]

 numeroDocumento:string;

  constructor(private ordemService:OrdemService, private router:Router) { }
 compraItens():CompraItem[]{
   return this.ordemService.compraItens();
 }
  ngOnInit() {
  }

  valorItens():number{
    return this.ordemService.valorItens();
  }
  incrimentaQuantidade(item:CompraItem){
    this.ordemService.incrimentaQuantidade(item);
  }
  descrementaQuantidade(item:CompraItem){
    this.ordemService.descrementaQuantidade(item);
  }
  remover(item:CompraItem){
    this.ordemService.remover(item);
  }
  createOrdem(ordem:OrdemModel){
    ordem.pagamentoItemViewModels = this.compraItens()
    .map((item:CompraItem)=> new OrdemItemModel(item.quantidade, item.servicoItemModel.id,'AT'));
    this.ordemService.createOrdem(ordem).subscribe((numeroDocumento:string) =>{
      this.numeroDocumento = numeroDocumento
      this.router.navigate(['/msg-finalizar-pedido',{numeroDocumento:this.numeroDocumento}])
      this.ordemService.clear();
    });
  }
}
