import { Component, OnInit } from '@angular/core';
import { ServicoComponenteService } from './servico/servico-componente.service';
import { ServicoModel } from './model/servico.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  servicoModel:ServicoModel[];
  
  constructor(private servicoComponenteService:ServicoComponenteService) {
    this.servicoComponenteService.servicos().subscribe(servico => this.servicoModel = servico);    
   }

  ngOnInit() {
  }

}
