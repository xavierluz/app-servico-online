import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilFuncaoServices } from '../servico/perfil-funcao.services';
import { PerfilFuncaoModel } from '../model/perfil-funcao.model';


@Component({
  selector: 'app-perfil-funcao-create',
  templateUrl: './perfil-funcao-create.component.html',
  styleUrls: ['./perfil-funcao-create.component.css']
})
export class PerfilFuncaoCreateComponent implements OnInit {
  @Input() EmpresaId: string;
  @ViewChild('fileInput') fileInput: ElementRef;
  form: FormGroup;
  createForm() {
    this.form = this.formBuilder.group({
      Name: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    });
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private perfilFuncaoServices: PerfilFuncaoServices) {this.createForm(); }

  ngOnInit() {
  }
  onSubmit() {
    const formModel = this.form.value;
    let funcaoModel: PerfilFuncaoModel = new PerfilFuncaoModel();

    funcaoModel.Name = formModel.Name;
    funcaoModel.ConcurrencyStamp ='';
    funcaoModel.Id='';
    funcaoModel.NormalizedName='';

    this.perfilFuncaoServices.createFuncao(funcaoModel).subscribe((funcao: string) => {
      this.router.navigate(['/perfil-funcao', { empresaId: this.EmpresaId }])
    });

  }
}
