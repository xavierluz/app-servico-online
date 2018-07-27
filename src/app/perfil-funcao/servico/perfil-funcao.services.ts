import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { PerfilFuncaoModel } from "../model/perfil-funcao.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "../../constantes.api";

@Injectable()
export class PerfilFuncaoServices{
    constructor(private http: Http, private httpCliente: HttpClient) { }

    createFuncao(funcao: PerfilFuncaoModel): Observable<string> {
        const headers = new Headers();
        let _funcao = JSON.stringify(funcao);
        console.log(_funcao);
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/Funcao/createFuncao`,
            _funcao,
            new RequestOptions({ headers: headers }))
            .map(response => response.json()).map(retorno => retorno.Id);

    }
}