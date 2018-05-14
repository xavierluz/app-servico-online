import { Component, OnInit,Input } from '@angular/core';
import { CategoriaComponent } from './categoria/categoria.component';
import { TituloModel } from './modulo/titulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() tituloModels:TituloModel;
  ngOnInit(){
  
  }
  title = 'app';
}
