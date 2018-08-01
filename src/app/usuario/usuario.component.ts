import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsuarioModel } from './model/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { DataTablesResponse } from '../shared/datatable/data-table.model';
import { MEAT_API } from '../constantes.api';
import { EmpresaUsuarioFuncaoModel } from '../shared/empresa-usuario/empresa-usuario-funcao.model';
const httpOptions = {
  headers: new HttpHeaders({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
};
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
 @Input() EmpresaId:string;
  dtOptions: DataTables.Settings = {};
  Usuarios:UsuarioModel[];
  alterarValortwoFactorEnabled(info: any): string {
    return (info.twoFactorEnabled ==false ? 'Não':'Sim');
  }
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.EmpresaId = this.route.snapshot.params['empresaId'];
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
        empresaUsuarioFuncao.EmpresaId = that.EmpresaId;
        dataTablesParameters.empresaUsuarioFuncao = empresaUsuarioFuncao;
        that.http
          .post<DataTablesResponse>(
          `${MEAT_API}/Usuario/getUsuarios`,
            dataTablesParameters, httpOptions,

        ).subscribe(resp => {
          that.Usuarios = resp.data;

          console.log(that.Usuarios);
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
        { targets: [4], className: 'detalhe-data-table-texto  table-column-20' },
        { targets: [5], className: 'actionButton-cor-fundo' }

      ],
      columns: [{
        title: 'Id',
        data: 'id'
      },
      {
        title: 'Usuário',
        data: 'userName'
      },
      {
        title: 'Email',
        data: 'email'
      },
      {
        title: 'Telefone',
        data: 'phoneNumber'
      },
      {
        title: 'Acesso Externo',
        data: 'twoFactorEnabled'
      },
     

      {
        defaultContent: '<div class="form-group" style="margin-left: -1%;"><p><a class="action-editar actionButton actionButton-cor-fundo" title="Editar"><i class="fa fa-edit editar-data-table"></i><span class="sr-only aria-hidden="true"">Editar</span></a><a class="action-detalhe actionButton actionButton-cor-fundo" title="Detalhes"><i class="fa fa-plus-square-o  detalhe-data-table"></i><span class="sr-only" aria-hidden="true">Detalhes</span></a></p></div>'
      }
      
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        self.alterarValortwoFactorEnabled(data);
        return row;
      },
      language: {
        emptyTable: "",
        zeroRecords: "Não foram encontrados resultados",
        infoEmpty: "Mostrando de 0 até 0 de 0 registros",
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
      }
    };
  }
}
