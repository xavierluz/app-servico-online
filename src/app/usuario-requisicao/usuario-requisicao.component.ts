import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataTablesResponse } from '../shared/datatable/data-table.model';
import { EmpresaUsuarioFuncaoModel } from '../shared/empresa-usuario/empresa-usuario-funcao.model';
import { ActivatedRoute } from '@angular/router';
import { MEAT_API } from '../constantes.api';
import { UsuarioRequisicaoModel } from './model/usuario-requisicao.model';
const httpOptions = {
  headers: new HttpHeaders({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
};
@Component({
  selector: 'app-usuario-requisicao',
  templateUrl: './usuario-requisicao.component.html',
  styleUrls: ['./usuario-requisicao.component.css']
})
export class UsuarioRequisicaoComponent implements OnInit {
  @Input() EmpresaId: string;
  @Input() UsuarioId: string;
  usuarioRequisicoes: UsuarioRequisicaoModel[];
  
  dtOptions: DataTables.Settings = {};
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.EmpresaId = this.route.snapshot.params['empresaId'];
    this.UsuarioId = this.route.snapshot.params['usuarioId'];
    this.configuarDataTble();
  }
  configuarDataTble() {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching: true,
      ordering: true,
      paging: true,
      ajax: (dataTablesParameters: DataTablesResponse, callback) => {
        let empresaUsuarioFuncao: EmpresaUsuarioFuncaoModel = new EmpresaUsuarioFuncaoModel();
        empresaUsuarioFuncao.UsuarioId = that.UsuarioId;
        empresaUsuarioFuncao.EmpresaId = that.EmpresaId;
        console.log(empresaUsuarioFuncao);
        dataTablesParameters.empresaUsuarioFuncao = empresaUsuarioFuncao;
        that.http
          .post<DataTablesResponse>(
          `${MEAT_API}/Usuario/getUsuarioRequisicao`,
            dataTablesParameters, httpOptions,

        ).subscribe(resp => {
          that.usuarioRequisicoes = resp.data;

          console.log(that.usuarioRequisicoes);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
      },
      columnDefs: [
        { targets: [0], visible: false },
        { targets: [3], className: 'detalhe-data-table-texto' },
        { targets: [4], className: 'actionButton-cor-fundo' }

      ],
      columns: [{
        title: 'Id',
        data: 'id'
      },
      {
        title: 'Tipo da requisição',
        data: 'type'
      },
      {
        title: 'Tipo do valor',
        data: 'valueType'
      },
      {
        title: 'Valor da requisição',
        data: 'value'
      },

      {
        defaultContent: '<div class="form-group" style="margin-left: -1%;"><p><a class="action-editar actionButton actionButton-cor-fundo" title="Editar"><i class="fa fa-edit editar-data-table"></i><span class="sr-only aria-hidden="true"">Editar</span></a><a class="action-detalhe actionButton actionButton-cor-fundo" title="Detalhes"><i class="fa fa-plus-square-o  detalhe-data-table"></i><span class="sr-only" aria-hidden="true">Detalhes</span></a></p></div>'
      }
      ],

      language: {
        emptyTable: "",
        zeroRecords: "Não foram encontrados resultados",
        infoEmpty: "Mostrando de 0 até 0 de 0 registros",
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
      }
    };
  }
}
