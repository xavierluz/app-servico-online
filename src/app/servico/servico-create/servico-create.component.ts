import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicoModel, Servico } from '../model/servico.model';
import { EmpresaUsuarioFuncaoModel } from '../../shared/empresa-usuario/empresa-usuario-funcao.model';
import { ServicoComponenteService } from '../servico/servico-componente.service';


@Component({
    selector: 'app-servico-create',
    templateUrl: './servico-create.component.html',
    styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {
    @Input() EmpresaId: string;
    @Input() UsuarioId: string;
    @Input() tipoServicoId: number;
    @Input() TipoServicoNome:string;

    @ViewChild('fileInput') fileInput: ElementRef;
    display = 'none'; //default Variable
    Mensagem:string;
    form: FormGroup;
    decimalPattern = /^\d+(\.\d{1,2})?$/i;

    constructor(private servicoComponenteService: ServicoComponenteService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
 
        this.createForm();
    }
    ngOnInit() {
        this.tipoServicoId = this.route.snapshot.params['id'];
        this.TipoServicoNome = this.route.snapshot.params['tipo'];

    }

    createForm() {
        this.form = this.formBuilder.group({
            Nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
            Indicacao: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
            Descricao: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]),
            Preco: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(this.decimalPattern)])

        });
    }
    onSubmit() {
        const formModel = this.form.value;
        let servivoModel: ServicoModel = new Servico();
        let empresaUsuario: EmpresaUsuarioFuncaoModel = new EmpresaUsuarioFuncaoModel();
        servivoModel.empresaUsuario = empresaUsuario;
        servivoModel.Descricao = formModel.Descricao;
        servivoModel.Nome = formModel.Nome;
        servivoModel.Indicacao = formModel.Indicacao;
        servivoModel.Preco = formModel.Preco;
        servivoModel.tipoServicoDominioId = this.tipoServicoId;

        this.servicoComponenteService.createServico(servivoModel).subscribe((servico: any) => {
            this.Mensagem="Serviço incluido com sucesso!";
            this.openModalDialog()
           
        });

    }
    openModalDialog() {
        this.display = 'block'; //Set block css
    }

    closeModalDialog() {
        this.display = 'none'; //set none css after close dialog
    }

}
