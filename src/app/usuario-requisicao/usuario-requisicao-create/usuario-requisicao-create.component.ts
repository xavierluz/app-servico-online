import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoRequisicao } from '../../shared/tipos/TipoRequisicao';
import { UsuarioRequisicaoModel } from '../model/usuario-requisicao.model';
import { EmpresaUsuarioFuncaoModel } from '../../shared/empresa-usuario/empresa-usuario-funcao.model';
import { UsuarioRequisicaoServices } from '../servico/usuario-requisicao.services';

@Component({
  selector: 'app-usuario-requisicao-create',
  templateUrl: './usuario-requisicao-create.component.html',
  styleUrls: ['./usuario-requisicao-create.component.css']
})
export class UsuarioRequisicaoCreateComponent implements OnInit {
  @Input() EmpresaId:string;
  @Input() UsuarioId:string;
  @ViewChild('fileInput') fileInput: ElementRef;

  Types: TipoRequisicao[] = [];

  form: FormGroup;
  createForm() {
    this.form = this.formBuilder.group({
      Type: this.formBuilder.control('', [Validators.required]),
      Value: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    });
  }
  createTypes() {
    let tipoRequisicao: TipoRequisicao = new TipoRequisicao();
    tipoRequisicao.Nome = 'Selecione o tipo';
    tipoRequisicao.Valor = '';
    this.Types.push(tipoRequisicao);
    tipoRequisicao = null;

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
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private usuarioRequisicaoServices: UsuarioRequisicaoServices) { 
    this.createForm();
    this.createTypes();
  }

  ngOnInit() {
    this.EmpresaId = this.route.snapshot.params['empresaId'];
    this.UsuarioId = this.route.snapshot.params['usuarioId'];

  }
  onSubmit() {
    const formModel = this.form.value;
    let usuarioRequisicaoModel: UsuarioRequisicaoModel = new UsuarioRequisicaoModel();
    let empresaUsuarioFuncaoModel: EmpresaUsuarioFuncaoModel = new EmpresaUsuarioFuncaoModel();
    empresaUsuarioFuncaoModel.UsuarioId = this.UsuarioId;
    usuarioRequisicaoModel.Type = formModel.Type;
    usuarioRequisicaoModel.ValueType = 'string'
    usuarioRequisicaoModel.Value = formModel.Value;
    usuarioRequisicaoModel.EmpresaUsuario = empresaUsuarioFuncaoModel;
    usuarioRequisicaoModel.ClaimsIdentity = null;
    usuarioRequisicaoModel.Issuer = '';
    usuarioRequisicaoModel.OriginalIssuer = '';
    usuarioRequisicaoModel.Properties = null;
    usuarioRequisicaoModel.CustomSerializationData = [];

    this.usuarioRequisicaoServices.createUsuarioRequisicao(usuarioRequisicaoModel).subscribe((usuarioRequisicao: any) => {
      this.router.navigate(['/usuario-requisicao', this.EmpresaId, this.UsuarioId]);
    });
  }
}
