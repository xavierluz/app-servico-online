import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../../constantes.api';
import { ErrorHandler } from '../../app.error-handler';
import { ServicoItemModel } from '../servico-item/model/servico-item.model';
import { ServicoModel } from '../model/servico.model';


@Injectable()
export class ServicoComponenteService {
  createServico(servicoModel: ServicoModel): Observable<any> {
    const headers = new Headers();
    let _servicoModel = JSON.stringify(servicoModel);
    console.log(_servicoModel);
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/Servico/Create`,
      _servicoModel,
      new RequestOptions({ headers: headers }))
      .map(response => response.json()).map(servico => servico);

  }
  constructor(private http: Http) { }

  servicos(): Observable<ServicoItemModel[]> {
    return this.http.get(`${MEAT_API}/Servico`).map(response => response.json()).catch(ErrorHandler.handleError);
  }
  servicoById(id: number): Observable<ServicoItemModel> {
    return this.http.get(`${MEAT_API}/Servico/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
  reviewsOfServico(id: number): Observable<any> {
    return this.http.get(`${MEAT_API}/Servico/${id}/reviewsServico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
  categoriaServicoOfServico(id: number): Observable<ServicoItemModel[]> {
    return this.http.get(`${MEAT_API}/Servico/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}