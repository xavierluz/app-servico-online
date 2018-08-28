import { Component, OnInit, Input } from '@angular/core';
import { TipoServicoModel } from '../tipo.servico.model';
import {trigger, state,style,transition, animate} from '@angular/animations'
@Component({
  selector: 'app-tipo-servico-model',
  templateUrl: './tipo-servico-model.component.html',
  animations:[
    trigger('tipoServicoAppeared',[
      state('ready',style({opacity:1})),
      transition('void => ready',[
        style({opacity:0,transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ],
  styleUrls: ['./tipo-servico-model.component.css']
})
export class TipoServicoModelComponent implements OnInit {
  tipoServicoEstado='ready';
  @Input() tipoServicoModel:TipoServicoModel;
  constructor() { }

  ngOnInit() {

  }

}
