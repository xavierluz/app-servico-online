import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { ServicoModel } from '../model/servico.model';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.component.html',
  animations: [
    trigger('servicoAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('800ms 0s ease-in')
      ])
    ])
  ],
  styleUrls: ['./servico-detalhe.component.css']
})
export class ServicoDetalheComponent implements OnInit {
  servicoEstado = 'ready';
  @Input() servico:ServicoModel;
  constructor() { }

  ngOnInit() {
  }

}
