import { Component, OnInit } from '@angular/core';
import {TipoServicoService} from '../servico/tipo.servico.service';
import { TipoServicoTableModel } from '../model/tipo.servico.table.model';

@Component({
  selector: 'app-tipo-servico-index',
  templateUrl: './tipo-servico-index.component.html',
  styleUrls: ['./tipo-servico-index.component.css']
})
export class TipoServicoIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  tipoServicos:TipoServicoTableModel[];

  constructor(private tipoServicoService:TipoServicoService) { }

  ngOnInit() {
    this.tipoServicos = this.tipoServicoService.getTipoServicos();
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Id',
        data: 'Id'
      },
      {
        title: 'Tipo',
        data: 'Tipo'
      },
      {
        title: 'Descrição',
        data: 'Descricao'
      },
      {
        title: 'Valor(R$)',
        data: 'Valor'
      },
      {
        title: 'Status',
        data: 'Status'
      }],
      language:{
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
      }
    };
  }

}
