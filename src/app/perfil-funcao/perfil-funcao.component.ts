import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTablesResponse } from '../shared/datatable/data-table.model';
import { MEAT_API } from '../constantes.api';
import { PerfilFuncaoModel } from './model/perfil-funcao.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
};

@Component({
  selector: 'app-perfil-funcao',
  templateUrl: './perfil-funcao.component.html',
  styleUrls: ['./perfil-funcao.component.css']
})
export class PerfilFuncaoComponent implements OnInit {
  @Input() EmpresaId:string;
  dtOptions: DataTables.Settings = {};
  Funcoes: PerfilFuncaoModel[];
  message = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.configuarDataTble();
  }
  someClickHandler(info: any): void {
    this.router.navigate(['/perfil-funcao-requisicao', info.id ]);
  }
  configuarDataTble(){
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
          `${MEAT_API}/Funcao/getsFuncao`,
            dataTablesParameters, httpOptions,

        ).subscribe(resp => {
          that.Funcoes = resp.data;

          console.log(that.Funcoes);
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
        title: 'Nome',
        data: 'name'
      },
      {
        title: 'Nome normalizado',
        data: 'normalizedName'
      },
      {
        title: 'Concorrencia',
        data: 'concurrencyStamp'
      },
      
      {
        defaultContent: '<div class="form-group" style="margin-left: -1%;"><p><a class="action-editar actionButton actionButton-cor-fundo" title="Editar"><i class="fa fa-edit editar-data-table"></i><span class="sr-only aria-hidden="true"">Editar</span></a><a  class="action-detalhe actionButton actionButton-cor-fundo" title="Requisiçoes"><i class="fa fa-plus-square-o  detalhe-data-table"></i><span class="sr-only" aria-hidden="true">Requisiçoes</span></a></p></div>'
      }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        
        $('.action-detalhe', row).bind('click', () => {
          self.someClickHandler(data);
        });
      
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
