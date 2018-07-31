import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRequisicaoCreateComponent } from './usuario-requisicao-create.component';

describe('UsuarioRequisicaoCreateComponent', () => {
  let component: UsuarioRequisicaoCreateComponent;
  let fixture: ComponentFixture<UsuarioRequisicaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRequisicaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRequisicaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
