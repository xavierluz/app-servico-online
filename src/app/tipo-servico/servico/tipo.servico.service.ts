import {TipoServicoTableModel} from '../model/tipo.servico.table.model';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { ErrorHandler } from '../../app.error-handler';
import { TipoServicoModel } from '../model/tipo.servico.model';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../constantes.api';
import { ServicoModel } from '../../servico/model/servico.model';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable()
export class TipoServicoService{
  constructor(private http:Http, private httpCliente:HttpClient ){}

    public progress: number;
    public message: string;
    tipoServicos():Observable<TipoServicoModel[]>{
      return this.http.get(`${MEAT_API}/tipoServico`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
    tipoServicosAdmin(tipo):Observable<TipoServicoModel[]>{
      const headers = new Headers();
      let tipos = JSON.stringify(tipo);
      console.log(tipos);
      console.log(tipo);
      headers.append('Content-Type','application/json');
      return this.http.post(`${MEAT_API}/TipoServico`,
                                JSON.stringify(tipos),
                                new RequestOptions({headers:headers}))
                      .map(response=> response.json()).map(tipoServico => tipoServico);
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
  createTipoServico(tipoServico:TipoServicoModel):Observable<HttpEvent<any>>{
    const endpoint = `${MEAT_API}/TipoServico/PostTipoServico`
    const formData: FormData = new FormData();
    formData.append("Nome",tipoServico.Nome);
    formData.append("Status",tipoServico.Status);
    formData.append("Descricao",tipoServico.Descricao);
    formData.append(tipoServico.fileToUpload.name,tipoServico.fileToUpload);

    const uploadConfiguracao = new HttpRequest('POST', endpoint, formData, {
      reportProgress: true,
    });

    return this.httpCliente.request(uploadConfiguracao);
  }
  
}