import { Component, OnInit } from '@angular/core';
import { ServicoComponenteService } from './servico/servico-componente.service';
import { ServicoItemModel } from './servico-item/model/servico-item.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
 
  servicoModel:ServicoItemModel;
  constructor(private servicoComponenteService:ServicoComponenteService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.servicoComponenteService.servicoById(this.route.snapshot.params['id'])
    .subscribe(servicoModel => this.servicoModel = servicoModel);
  }
 

}
