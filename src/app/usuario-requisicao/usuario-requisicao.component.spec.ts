import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRequisicaoComponent } from './usuario-requisicao.component';

describe('UsuarioRequisicaoComponent', () => {
  let component: UsuarioRequisicaoComponent;
  let fixture: ComponentFixture<UsuarioRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
