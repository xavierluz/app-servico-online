import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as _ from 'underscore';


import { ServicoTableModel } from '../model/servico.table.model';
import { ServicoService } from '../servico/servico.service';
import { PagerService } from '../../paginacao/pagina-service';

@Component({
  selector: 'app-servico-index',
  templateUrl: './servico-index.component.html',
  styleUrls: ['./servico-index.component.css']
})
export class ServicoIndexComponent implements OnInit {
  servicosTables: ServicoTableModel[];
  // array com todos os itens a serem paginados
  private allItems: any[];

  // pager object
  pager: any = {};

  // items paginados
  pagedItems: any[];

  constructor(private servicoService: ServicoService, private http: Http, private pagerService: PagerService) { }

  ngOnInit() {
    this.servicosTables = this.servicoService.getServicosTable();
    const that = this;

    //Definir os itens para a resposta json
    this.allItems = this.servicosTables;
    //Inicializar na página 1
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // pega o objeto pager do serviço
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // pega a página atual de itens
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);


  }

}
