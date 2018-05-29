import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/model/radio-option.model';

@Component({
  selector: 'app-ordem-pagamento',
  templateUrl: './ordem-pagamento.component.html',
  styleUrls: ['./ordem-pagamento.component.css']
})
export class OrdemPagamentoComponent implements OnInit {
  paymentOptions:RadioOption[]=[
    {label:'Dinheiro', value:'dinh'},
    {label:'Cheque', value:'cheq'},
    {label:'Cartão de Débito', value:'debi'}
 ]

  constructor() { }

  ngOnInit() {
  }

}
