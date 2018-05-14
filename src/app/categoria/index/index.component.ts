import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CategoriaModel } from '../model/categoria.model';
import { CategoriaService } from '../servicos/categoria.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class CategoriaIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  categorias:CategoriaModel[];
  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.categorias();

    const that = this;
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Id',
        data: 'Id'
      },
      {
        title: 'Image',
        data: 'caminhoImage'
      }, 
      {
        title: 'Nome',
        data: 'Nome'
      }, 
      {
        title: 'Descrição',
        data: 'Descricao'
      },
      {
        title: 'Status',
        data: 'Status'
      }],
      language:{
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
      }

     
    };
    
  }
}
