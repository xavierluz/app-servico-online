import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class
ClassificacaoIndexComponent implements OnInit {

  @Input() categorias:any;

  constructor() { }

  ngOnInit() {
  }

}
