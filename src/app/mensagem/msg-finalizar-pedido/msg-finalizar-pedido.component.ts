import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-msg-finalizar-pedido',
  templateUrl: './msg-finalizar-pedido.component.html',
  styleUrls: ['./msg-finalizar-pedido.component.css']
})
export class MsgFinalizarPedidoComponent implements OnInit {
  numeroDocumento:string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.numeroDocumento = this.route.snapshot.params['numeroDocumento']
  }

}
