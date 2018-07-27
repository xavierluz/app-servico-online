import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFuncaoRequisicaoComponent } from './perfil-funcao-requisicao.component';

describe('PerfilFuncaoRequisicaoComponent', () => {
  let component: PerfilFuncaoRequisicaoComponent;
  let fixture: ComponentFixture<PerfilFuncaoRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFuncaoRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFuncaoRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
