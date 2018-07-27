import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { EmpresaService } from '../servico/empresa.service';
import { EmpresaModel } from '../model/empresa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {
  empresaId:string;
  form: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  cnpjCpfPattern= /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  constructor(private formBuilder: FormBuilder,private empresaService:EmpresaService,private router:Router) { this.createForm();}

  @ViewChild('fileInput') fileInput: ElementRef;

  createForm() {
    this.form = this.formBuilder.group({
      Nome: this.formBuilder.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      Email:this.formBuilder.control('',[Validators.required,Validators.maxLength(100),Validators.pattern(this.emailPattern)]),
      NomeFantasia:this.formBuilder.control('',[Validators.minLength(5),Validators.maxLength(150)]),
      CnpjCpf:this.formBuilder.control('',[Validators.minLength(5),Validators.maxLength(15),Validators.required,Validators.pattern(this.cnpjCpfPattern)]),
    });
  }
  onSubmit() {
    const formModel = this.form.value;
    let empresaModel:EmpresaModel =  new EmpresaModel();

    empresaModel.NomeFantasia = formModel.NomeFantasia;
    empresaModel.CnpjCpf = formModel.CnpjCpf;
    empresaModel.Nome  =formModel.Nome;
    empresaModel.Status ="AT";
    empresaModel.Email = formModel.Email;

    this.empresaService.createEmpresa(empresaModel).subscribe((empresaId:string) =>{
      this.empresaId = empresaId
      this.router.navigate(['/empresa',{empresaId:this.empresaId}])
    });
    
  }
  ngOnInit() {
  }

}
