import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../../constantes.api';
import { ServicoModel } from '../model/servico.model';
import { ErrorHandler } from '../../app.error-handler';
import { CategoriaServicoModel } from '../../categoria/model/categoria-servico.model';

@Injectable()
export class ServicoComponenteService{
    constructor(private http:Http){}

    servicos():Observable<ServicoModel[]>{
      return this.http.get(`${MEAT_API}/servico`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
    servicoById(id:number):Observable<ServicoModel>{
      return this.http.get(`${MEAT_API}/servico/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    reviewsOfServico(id:number):Observable<any>{
      return this.http.get(`${MEAT_API}/servico/${id}/reviewsServico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    categoriaServicoOfServico(id:number):Observable<CategoriaServicoModel[]>{
      return this.http.get(`${MEAT_API}/servico/${id}/categoriaServico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
}