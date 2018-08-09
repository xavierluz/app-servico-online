import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-boostrap',
  templateUrl: './modal-boostrap.component.html',
  styleUrls: ['./modal-boostrap.component.css']
})
export class ModalBoostrapComponent implements OnInit {
  @Input() display: string = 'none';
  @Input() Mensagem: string;
  openModalDialog() {
    this.display = 'block'; //Set block css
  }

  closeModalDialog() {
    this.display = 'none'; //set none css after close dialog
  }
  setMensagem(mensagem:string){
    this.Mensagem = mensagem;
  }
  constructor() { }

  ngOnInit() {
  }

}

