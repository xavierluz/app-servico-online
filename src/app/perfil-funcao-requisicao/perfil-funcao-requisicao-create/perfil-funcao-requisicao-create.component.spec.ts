import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFuncaoRequisicaoCreateComponent } from './perfil-funcao-requisicao-create.component';

describe('PerfilFuncaoRequisicaoCreateComponent', () => {
  let component: PerfilFuncaoRequisicaoCreateComponent;
  let fixture: ComponentFixture<PerfilFuncaoRequisicaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFuncaoRequisicaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFuncaoRequisicaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
