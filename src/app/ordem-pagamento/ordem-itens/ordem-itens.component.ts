import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { CompraItem } from '../../compra/model/compra-item.model';

@Component({
  selector: 'app-ordem-itens',
  templateUrl: './ordem-itens.component.html',
  styleUrls: ['./ordem-itens.component.css']
})
export class OrdemItensComponent implements OnInit {
  @Input() itens:CompraItem[]

  @Output() incrimentaQuantidade = new EventEmitter<CompraItem>();
  @Output() descrementaQuantidade = new EventEmitter<CompraItem>();
  @Output() remover = new EventEmitter<CompraItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncrimentaQuantidade(item:CompraItem){
    this.incrimentaQuantidade.emit(item);
  }
  emitDescrementaQuantidade(item:CompraItem){
    this.descrementaQuantidade.emit(item);
  }
  emiRemover(item:CompraItem){
    this.remover.emit(item);
  }
}
