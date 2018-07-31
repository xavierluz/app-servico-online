import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFuncaoComponent } from './usuario-funcao.component';

describe('UsuarioFuncaoComponent', () => {
  let component: UsuarioFuncaoComponent;
  let fixture: ComponentFixture<UsuarioFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
