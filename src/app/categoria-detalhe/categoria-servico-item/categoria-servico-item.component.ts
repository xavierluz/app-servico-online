import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaServicoModel } from '../../categoria/model/categoria-servico.model';


@Component({
  selector: 'app-categoria-servico-item',
  templateUrl: './categoria-servico-item.component.html',
  styleUrls: ['./categoria-servico-item.component.css']
})
export class CategoriaServicoItemComponent implements OnInit {
  @Input() categoriaServicoItem:CategoriaServicoModel;
  @Output() add =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitAddEvent(){
    this.add.emit(this.categoriaServicoItem);
  }
}
