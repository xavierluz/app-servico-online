import { Component, OnInit } from '@angular/core';
import { CompraService } from './servico/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private compraService:CompraService) { }

  ngOnInit() {
    this.clear();
  }

  itens():any[]{
    return this.compraService.itens;
  }
  total():number{
    return this.compraService.total();
  }
  clear(){
    this.compraService.clear();
  }
  removeItem(item:any){
    this.compraService.removeItem(item);
  }
  addItem(item:any){
    this.compraService.addItem(item);
  }

}
