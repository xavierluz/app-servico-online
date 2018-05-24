import {TipoServicoTableModel} from '../model/tipo.servico.table.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandler } from '../../app.error-handler';
import { TipoServicoModel } from '../model/tipo.servico.model';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../constantes.api';
import { ServicoModel } from '../../servico/model/servico.model';

@Injectable()
export class TipoServicoService{
  constructor(private http:Http){}

    tipoServicos():Observable<TipoServicoModel[]>{
      return this.http.get(`${MEAT_API}/tipoServico`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
    tipoServicoById(id:number):Observable<TipoServicoModel>{
      return this.http.get(`${MEAT_API}/tipoServico/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    reviewsOfTipoServico(id:number):Observable<any>{
      return this.http.get(`${MEAT_API}/tipoServico/${id}/reviewsTipoServico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    servicoOfTipoServico(id:number):Observable<ServicoModel[]>{
      return this.http.get(`${MEAT_API}/tipoServico/${id}/servico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}