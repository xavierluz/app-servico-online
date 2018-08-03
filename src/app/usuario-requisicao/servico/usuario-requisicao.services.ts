import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UsuarioRequisicaoModel } from "../model/usuario-requisicao.model";
import { Http,Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "../../constantes.api";


@Injectable()
export class UsuarioRequisicaoServices{
  constructor(private http: Http, private httpCliente: HttpClient) { }

  createUsuarioRequisicao(usuarioRequisicao: UsuarioRequisicaoModel): Observable<any> {
    const headers = new Headers();
    let _usuarioRequisicao = JSON.stringify(usuarioRequisicao);
    console.log(_usuarioRequisicao);
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/Usuario/createRequisicao`,
      _usuarioRequisicao,
      new RequestOptions({ headers: headers }))
      .map(response => response.json()).map(retorno => retorno.Id);

  }
    
}