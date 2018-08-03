import { Injectable } from "@angular/core";
import { Http,Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { UsuarioLoginModel } from "../model/usuario-login.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "../../constantes.api";

@Injectable()
export class UsuarioLoginServices{
    constructor(private http: Http, private httpCliente: HttpClient) { }

    createUsuarioRequisicao(usuarioLogin: UsuarioLoginModel): Observable<any> {
        const headers = new Headers();
        let _usuarioLogin = JSON.stringify(usuarioLogin);
        console.log(_usuarioLogin);
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/Usuario/createLogin`,
            _usuarioLogin,
            new RequestOptions({ headers: headers }))
            .map(response => response.json()).map(retorno => retorno.Id);

    }

}