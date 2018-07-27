import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmpresaModel } from '../model/empresa.model';
import { MEAT_API } from '../../constantes.api';
import 'rxjs/add/operator/map';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class EmpresaService{
    empresaId:string;
    constructor(private http:Http ){}

    createEmpresa(empresa:EmpresaModel):Observable<string>{
        const headers = new Headers();
        let Empresa = JSON.stringify(empresa);
        console.log(Empresa);
        headers.append('Content-Type','application/json');
        return this.http.post(`${MEAT_API}/Empresa/CreateEmpresa`,
                                    Empresa,
                                  new RequestOptions({headers:headers}))
                        .map(response=> response.json()).map(empresa => empresa);
  
    }
    getEmpresas():Observable<EmpresaModel[]>{
        return this.http.get(`${MEAT_API}/Empresa/Gets`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
}
