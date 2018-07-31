import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilFuncaoRequisicaoServices } from '../servico/perfil-funcao-requisicao.services';
import { PerfilFuncaoRequisicaoModel } from '../model/perfil-funcao-requisicao.model';
import { TipoRequisicao } from '../../shared/tipos/TipoRequisicao';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaUsuarioFuncaoModel } from '../../shared/empresa-usuario/empresa-usuario-funcao.model';


@Component({
  selector: 'app-perfil-funcao-requisicao-create',
  templateUrl: './perfil-funcao-requisicao-create.component.html',
  styleUrls: ['./perfil-funcao-requisicao-create.component.css']
})
export class PerfilFuncaoRequisicaoCreateComponent implements OnInit {
  @Input() EmpresaId: string;
  @Input() funcaoId:string;

  @ViewChild('fileInput') fileInput: ElementRef;

  Types: TipoRequisicao[]=[]//[] = [['', 'Número', 'Texto','Menu','Link'], ['Selecione o tipo', 'Number', 'Text','Menu','Link']];

  form: FormGroup;
  createForm() {
    this.form = this.formBuilder.group({
      Type: this.formBuilder.control('', [Validators.required]),
      Value: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    });
  }
  createTypes(){
    let tipoRequisicao:TipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome ='Selecione o tipo';
    tipoRequisicao.Valor ='';
    this.Types.push(tipoRequisicao);
    tipoRequisicao=null;

    tipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome = 'Número';
    tipoRequisicao.Valor = 'Number';
    this.Types.push(tipoRequisicao);
    tipoRequisicao = null;

    tipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome = 'Texto';
    tipoRequisicao.Valor = 'Text';
    this.Types.push(tipoRequisicao);
    tipoRequisicao = null;

    tipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome = 'Menu';
    tipoRequisicao.Valor = 'Menu';
    this.Types.push(tipoRequisicao);
    tipoRequisicao = null;

    tipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome = 'Link';
    tipoRequisicao.Valor = 'Link';
    this.Types.push(tipoRequisicao);
    tipoRequisicao = null;
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,  private perfilFuncaoRequisicaoServices: PerfilFuncaoRequisicaoServices) { 
    this.createForm();
    this.createTypes();
  }

  ngOnInit() {
    this.funcaoId = this.route.snapshot.params['id'];
  }
  onSubmit() {
    const formModel = this.form.value;
    let funcaoRequisicaoModel: PerfilFuncaoRequisicaoModel = new PerfilFuncaoRequisicaoModel();
    let empresaUsuarioFuncaoModel: EmpresaUsuarioFuncaoModel = new EmpresaUsuarioFuncaoModel();
    empresaUsuarioFuncaoModel.FuncaoId = this.funcaoId;
    funcaoRequisicaoModel.Type = formModel.Type;
    funcaoRequisicaoModel.ValueType = 'string'
    funcaoRequisicaoModel.Value = formModel.Value;
    funcaoRequisicaoModel.EmpresaUsuario = empresaUsuarioFuncaoModel;
    funcaoRequisicaoModel.ClaimsIdentity = null;
    funcaoRequisicaoModel.Issuer='';
    funcaoRequisicaoModel.OriginalIssuer='';
    funcaoRequisicaoModel.Properties =null;
    funcaoRequisicaoModel.CustomSerializationData =[];

    this.perfilFuncaoRequisicaoServices.createFuncaoRequisicao(funcaoRequisicaoModel).subscribe((funcao: string) => {
      this.router.navigate(['/perfil-funcao-requisicao', this.funcaoId]);
    });

  }
}
