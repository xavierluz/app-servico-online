import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { PerfilFuncaoRequisicaoModel } from "../model/perfil-funcao-requisicao.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "../../constantes.api";

@Injectable()
export class PerfilFuncaoRequisicaoServices{
    constructor(private http: Http, private httpCliente: HttpClient) { }

    createFuncaoRequisicao(funcaoRequisicao: PerfilFuncaoRequisicaoModel): Observable<string> {
        const headers = new Headers();
        let _funcaoRequisicao = JSON.stringify(funcaoRequisicao);
        console.log(_funcaoRequisicao);
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/Funcao/adicionarRequisicaoAfuncao`,
            _funcaoRequisicao,
            new RequestOptions({ headers: headers }))
            .map(response => response.json()).map(retorno => retorno.Id);

    }
}