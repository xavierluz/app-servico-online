import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriaServicoModel } from '../../categoria/model/categoria-servico.model';
import { ServicoComponenteService } from '../../servico/servico/servico-componente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria-servico',
  templateUrl: './categoria-servico.component.html',
  styleUrls: ['./categoria-servico.component.css']
})
export class CategoriaServicoComponent implements OnInit {

  categoriaServicos:Observable<CategoriaServicoModel[]>;
  constructor(private servicoComponenteService:ServicoComponenteService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.categoriaServicos = this.servicoComponenteService.categoriaServicoOfServico(this.route.parent.snapshot.params['id']);
    console.log(this.categoriaServicos);
  }
  addMenuItem(item:CategoriaServicoModel){
    console.log(item);
  }
}
