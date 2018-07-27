import { Component, OnInit } from '@angular/core';
import { ServicoItemModel } from './servico-item/model/servico-item.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TipoServicoService } from '../tipo-servico/servico/tipo.servico.service';
import { TipoServicoModel } from '../tipo-servico/model/tipo.servico.model';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  tipoServico:TipoServicoModel;
  data:Date;
  dia:String;
  mes:String;
  ano:String;

  constructor(private tipoServicoService: TipoServicoService, private route: ActivatedRoute) { 
    

  }

  ngOnInit() {
    this.getServicoById();
 
  }
  getServicoById(){
    if(this.route.snapshot.params['id'] != undefined){
      this.tipoServicoService.tipoServicoById(this.route.snapshot.params['id'])
        .subscribe((tipoServico) => this.tipoServico = tipoServico);

      }
  }
  getDateNowFormatdddMMyyy(): String {
    
    this.data =  new Date;
    
    this.dia = this.data.getDate().toString();
    this.mes = (this.data.getMonth() +1).toString();
    this.ano = this.data.getFullYear().toString();

    if(+this.dia < 10)
      this.dia = '0' + this.dia;

    if(+this.mes < 10){
      this.mes='0'+this.mes;
    } 
    console.log(this.tipoServico);   
    return this.dia + '/' + this.mes + '/' + this.ano;
  }
}
