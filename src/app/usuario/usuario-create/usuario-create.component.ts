import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServices } from '../servico/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  @Input() EmpresaId: string;
  @Input() funcaoId: string;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numeroPattern = /^[0-9]*$/;

  @ViewChild('fileInput') fileInput: ElementRef;

  
  form: FormGroup;
  createForm() {
    this.form = this.formBuilder.group({
      Email: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern(this.emailPattern)]),
      UserName: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      PhoneNumber: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(11), Validators.pattern(this.numeroPattern)]),
      PasswordHash: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      NormalizedEmail: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern(this.emailPattern)])

    });
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private usuarioServices: UsuarioServices) { 
    this.createForm();    
  }

  ngOnInit() {
  }

}
