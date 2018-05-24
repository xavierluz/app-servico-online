import { Component, OnInit } from '@angular/core';
import { ServicoComponenteService } from '../servico/servico/servico-componente.service';
import { ActivatedRoute } from '@angular/router';
import { ServicoItemModel } from '../servico/servico-item/model/servico-item.model';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit {

  servicoModel:ServicoItemModel;

  constructor(private servicoComponentService:ServicoComponenteService,private router:ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.servicoComponentService.servicoById(this.router.snapshot.params['id'])
    .subscribe(servico => this.servicoModel = servico);
  }

}
