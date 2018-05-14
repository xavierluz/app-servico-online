import { Component, OnInit } from '@angular/core';
import {ItemMaterialService} from '../servico/item.material.service';
import { ItemMaterialTableModel } from '../model/item.material.table.model';
@Component({
  selector: 'app-item-material-index',
  templateUrl: './item-material-index.component.html',
  styleUrls: ['./item-material-index.component.css']
})
export class ItemMaterialIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ItensMateriais:ItemMaterialTableModel[];
  constructor(private itemMaterialService:ItemMaterialService) { }

  ngOnInit() {
    this.ItensMateriais = this.itemMaterialService.getItensDeMateriais();
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Id',
        data: 'Id'
      },
      {
        title:'CaminhoImage',
        data:'CaminhoImage'
      },
      {
        title:'Nome',
        data:'Nome'
      },
      {
        title: 'Descricao',
        data: 'Descrição'
      },
      {
        title: 'CategoriaId',
        data: 'CategoriaId'
      },
      {
        title: 'CategoriaNome',
        data: 'CategoriaNome'
      }],
      language:{
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
      }
    };
  }

}
