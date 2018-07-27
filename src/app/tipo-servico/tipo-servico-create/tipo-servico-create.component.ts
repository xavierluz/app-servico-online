import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoServicoModel, TipoServico } from '../model/tipo.servico.model';
import { TipoServicoService } from '../servico/tipo.servico.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-tipo-servico-create',
  templateUrl: './tipo-servico-create.component.html',
  styleUrls: ['./tipo-servico-create.component.css']
})
export class TipoServicoCreateComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  fileToUpload: File = null;

  public progress: number;
  public message: string;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private formBuilder: FormBuilder,private tipoServicoService:TipoServicoService) { this.createForm(); }
  createForm() {
    this.form = this.formBuilder.group({
      Nome: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      descricaoServico:this.formBuilder.control('',[Validators.minLength(5)]),
      imagem: null
    });
  }
  ngOnInit() {
  }


  onSubmit() {
    const formModel = this.form.value;
    let tipoServico:TipoServicoModel =  new TipoServico();

    tipoServico.Descricao = formModel.descricaoServico;
    tipoServico.Nome  =formModel.Nome;
    tipoServico.Status ="AT";
    tipoServico.caminhoDaImage = this.fileToUpload.name;
    tipoServico.fileToUpload =this.fileToUpload; 
    this.tipoServicoService.createTipoServico(tipoServico).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response)
        this.message = event.body.toString();
    });
    this.progress = this.tipoServicoService.progress;

  }
  clearFile() {
    this.form.get('imagem').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


}
