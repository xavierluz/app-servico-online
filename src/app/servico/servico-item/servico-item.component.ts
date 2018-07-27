import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ServicoItemModel } from './model/servico-item.model';

@Component({
  selector: 'app-servico-item',
  templateUrl: './servico-item.component.html',
  styleUrls: ['./servico-item.component.css']
})
export class ServicoItemComponent implements OnInit {

  @Input() servicoItemModel:ServicoItemModel;
  @Output() add =  new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  emitAddEvent(){
    this.add.emit(this.servicoItemModel);
  }
}
