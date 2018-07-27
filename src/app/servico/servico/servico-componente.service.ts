import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../../constantes.api';
import { ErrorHandler } from '../../app.error-handler';
import { ServicoItemModel } from '../servico-item/model/servico-item.model';


@Injectable()
export class ServicoComponenteService{
    constructor(private http:Http){}

    servicos():Observable<ServicoItemModel[]>{
      return this.http.get(`${MEAT_API}/Servico`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
    servicoById(id:number):Observable<ServicoItemModel>{
      return this.http.get(`${MEAT_API}/Servico/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
    }
    reviewsOfServico(id:number):Observable<any>{
      return this.http.get(`${MEAT_API}/Servico/${id}/reviewsServico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    categoriaServicoOfServico(id:number):Observable<ServicoItemModel[]>{
      return this.http.get(`${MEAT_API}/Servico/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
    }
}