import { Component, OnInit, Input } from '@angular/core';
import { ServicoModel } from '../model/servico.model';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.component.html',
  styleUrls: ['./servico-detalhe.component.css']
})
export class ServicoDetalheComponent implements OnInit {
  @Input() servico:ServicoModel;
  constructor() { }

  ngOnInit() {
  }

}
