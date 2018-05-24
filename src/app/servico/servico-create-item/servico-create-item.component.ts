import { Component, OnInit } from '@angular/core';
import { ServicoItemModel } from '../servico-item/model/servico-item.model';
import { Observable } from 'rxjs/Observable';
import { ServicoComponenteService } from '../servico/servico-componente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servico-create-item',
  templateUrl: './servico-create-item.component.html',
  styleUrls: ['./servico-create-item.component.css']
})
export class ServicoCreateItemComponent implements OnInit {

  servicoItemModels:Observable<ServicoItemModel[]>;

  constructor(private servicoServices :ServicoComponenteService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.servicoItemModels = this.servicoServices.categoriaServicoOfServico(this.route.parent.snapshot.params['id']);
  }
  addMenuItem(servicoItemModel:ServicoItemModel){
    console.log(servicoItemModel);
  }
}
