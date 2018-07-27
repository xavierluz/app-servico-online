import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './servico/empresa.service';
import { EmpresaModel } from './model/empresa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from '../constantes.api';
import { DataTablesResponse } from '../shared/datatable/data-table.model';

const httpOptions = {
  headers: new HttpHeaders({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
};


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  Empresas: EmpresaModel[];
  dtOptions: DataTables.Settings = {};
  constructor(private empresaService: EmpresaService, private http: HttpClient) { }

  ngOnInit() {
    //this.empresaService.getEmpresas().subscribe(empresas => this.Empresas = empresas);
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching: true,
      ordering: true,
      paging: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            `${MEAT_API}/Empresa/Gets`,
            dataTablesParameters, httpOptions,

        ).subscribe(resp => {
          that.Empresas = resp.data;

          console.log(that.Empresas);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
      },
      columnDefs:[
        { targets: [0], visible: false},
        { targets:[1,2,3,4,5],className:'detalhe-data-table-texto'},
        { targets:[6],className:'actionButton-cor-fundo'}
        
      ],
      columns: [{
        title: 'Id',
        data: 'id'
      },
      {
        title: 'CNPJ/CPF',
        data: 'cnpjCpf'
      },
      {
        title: 'Nome',
        data: 'nome'
      },
      {
        title: 'Nome Fântasia',
        data: 'nomeFantasia'
      },
      {
        title: 'Email',
        data: 'email'
      },
      {
        title: 'Status',
        data: 'status'
      },
      {
        defaultContent:'<div class="form-group" style="margin-left: -1%;"><p><a class="action-editar actionButton actionButton-cor-fundo" title="Editar"><i class="fa fa-edit editar-data-table"></i><span class="sr-only aria-hidden="true"">Editar</span></a><a class="action-detalhe actionButton actionButton-cor-fundo" title="Detalhes"><i class="fa fa-plus-square-o  detalhe-data-table"></i><span class="sr-only" aria-hidden="true">Detalhes</span></a></p></div>'
      }
    ],

      language: {
        emptyTable:"",
        zeroRecords:"Não foram encontrados resultados",
        infoEmpty:"Mostrando de 0 até 0 de 0 registros",
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
      }
    };
  }

  private configurarTable() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Id',
        data: 'Id'
      },
      {
        title: 'CNPJ/CPF',
        data: 'CnpjCpf'
      },
      {
        title: 'Nome',
        data: 'Nome'
      },
      {
        title: 'Nome Fântasia',
        data: 'NomeFantasia'
      },
      {
        title: 'Status',
        data: 'Status'
      }],
      language: {
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
      }


    };
  }
}
