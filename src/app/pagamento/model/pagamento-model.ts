import { ServicoModel } from "../../servico/model/servico.model";

export interface TipoPagamentoModel{
    Id:string;
    TipoPagamentoId:number;
    TipoPagamento:TipoPagamentoModel;
    ServicoId:string;
    Servico:ServicoModel;
    Quantidade:number;
    Valor:number;
    Status:string;
}