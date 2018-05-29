import { Component, OnInit, Input, ContentChild,AfterContentInit, AfterContentChecked } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
 
  @Input() label:string;
  @Input() erroMensage:string;
  input:any;
  @ContentChild(NgModel) model:NgModel;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }

  }
  hasSucess():string{
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError():string{
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
