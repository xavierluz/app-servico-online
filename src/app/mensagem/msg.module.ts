import { NgModule } from "@angular/core";
import { RouterModule,Routes} from "@angular/router";

import { MsgFinalizarPedidoComponent } from "./msg-finalizar-pedido/msg-finalizar-pedido.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";


const ROUTES:Routes =[
    {path:'',component:MsgFinalizarPedidoComponent}
]
@NgModule({
    declarations:[MsgFinalizarPedidoComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,SharedModule,RouterModule.forChild(ROUTES)],
    exports:[MsgFinalizarPedidoComponent,SharedModule,CommonModule,FormsModule,ReactiveFormsModule]
})
export class ModuleMsg{}