import { Component, OnInit } from '@angular/core';
import { TipoServicoModel } from './model/tipo.servico.model';
import { TipoServicoService } from './servico/tipo.servico.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.component.html',
  styleUrls: ['./tipo-servico.component.css']
})
export class TipoServicoComponent implements OnInit {

  tipoServicos:TipoServicoModel[];

  constructor(private tipoServicoService:TipoServicoService) { 
    this.tipoServicoService.tipoServicos().subscribe(tipoServico => this.tipoServicos = tipoServico);      
  }

  ngOnInit() {
  }

}
