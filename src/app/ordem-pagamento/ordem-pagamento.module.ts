import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";

import { OrdemPagamentoComponent } from "./ordem-pagamento.component";
import { OrdemItensComponent } from "./ordem-itens/ordem-itens.component";
import { OrdemFechamentoComponent } from "./ordem-fechamento/ordem-fechamento.component";
import { SharedModule } from "../shared/shared.module";


const ROUTES:Routes =[
    {path:'',component:OrdemPagamentoComponent}
]
@NgModule({
    declarations:[OrdemPagamentoComponent,OrdemItensComponent,OrdemFechamentoComponent],
    imports:[SharedModule,RouterModule.forChild(ROUTES)]
})
export class OrdemPagamentoModule{}