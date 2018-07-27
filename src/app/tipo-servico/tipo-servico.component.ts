import { Component, OnInit } from '@angular/core';
import { TipoServicoModel } from './model/tipo.servico.model';
import { TipoServicoService } from './servico/tipo.servico.service';
import { NotificationService } from '../mensagem/notification.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.component.html',
  styleUrls: ['./tipo-servico.component.css']
})
export class TipoServicoComponent implements OnInit {

  tipoServicos:TipoServicoModel[];

  constructor(private tipoServicoService:TipoServicoService,private notificationService:NotificationService) { 
    this.tipoServicoService.tipoServicos().subscribe(tipoServico => this.tipoServicos = tipoServico);      
  }

  ngOnInit() {
  }

}
