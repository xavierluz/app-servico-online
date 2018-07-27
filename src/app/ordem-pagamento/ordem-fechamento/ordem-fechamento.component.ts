import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-fechamento',
  templateUrl: './ordem-fechamento.component.html',
  styleUrls: ['./ordem-fechamento.component.css']
})
export class OrdemFechamentoComponent implements OnInit {

  @Input() valorItens: number;
  constructor() { }

  ngOnInit() {
  }

  total():number{
    return this.valorItens;
  }
}
