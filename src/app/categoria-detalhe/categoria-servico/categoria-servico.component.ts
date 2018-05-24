import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServicoComponenteService } from '../../servico/servico/servico-componente.service';
import { ActivatedRoute } from '@angular/router';
import { ServicoItemModel } from '../../servico/servico-item/model/servico-item.model';


@Component({
  selector: 'app-categoria-servico',
  templateUrl: './categoria-servico.component.html',
  styleUrls: ['./categoria-servico.component.css']
})
export class CategoriaServicoComponent implements OnInit {

  categoriaServicos:Observable<ServicoItemModel[]>;
  constructor(private servicoComponenteService:ServicoComponenteService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.categoriaServicos = this.servicoComponenteService.categoriaServicoOfServico(this.route.parent.snapshot.params['id']);
    console.log(this.categoriaServicos);
  }
  addMenuItem(item:ServicoItemModel){
    console.log(item);
  }
}
