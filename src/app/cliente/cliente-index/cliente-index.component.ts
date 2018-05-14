import { Component, OnInit } from '@angular/core';
import { ClienteTableModel } from '../model/cliente.table.model';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  clientes:ClienteTableModel[];
  constructor( private clienteService:ClienteService) {}

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();

    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Id',
        data: 'Id'
      },
      {
        title: 'Nome',
        data: 'Nome'
      },
      {
        title: 'Telefone',
        data: 'Telefone'
      },
      {
        title: 'WhatsApp',
        data: 'WhatsApp'
      },
      {
        title: 'Email',
        data: 'Email'
      }],
      language:{
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
      }
    };
  }
}
