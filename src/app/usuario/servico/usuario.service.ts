import { Injectable } from "@angular/core";
import { Http,Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../model/usuario.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "../../constantes.api";

@Injectable()
export class UsuarioServices{
    constructor(private http: Http, private httpCliente: HttpClient) { }

    createUsuario(usuarioModel: UsuarioModel): Observable<any> {
        const headers = new Headers();
        let _usuario = JSON.stringify(usuarioModel);
        console.log(_usuario);
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/Usuario/Registrar`,
            _usuario,
            new RequestOptions({ headers: headers }))
            .map(response => response.json()).map(usuario => usuario);

    }
}