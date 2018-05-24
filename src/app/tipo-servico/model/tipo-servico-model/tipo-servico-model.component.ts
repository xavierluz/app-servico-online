import { Component, OnInit, Input } from '@angular/core';
import { TipoServicoModel } from '../tipo.servico.model';

@Component({
  selector: 'app-tipo-servico-model',
  templateUrl: './tipo-servico-model.component.html',
  styleUrls: ['./tipo-servico-model.component.css']
})
export class TipoServicoModelComponent implements OnInit {
  @Input() tipoServicoModel:TipoServicoModel;
  constructor() { }

  ngOnInit() {
  }

}
