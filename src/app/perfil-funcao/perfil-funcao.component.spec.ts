import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFuncaoComponent } from './perfil-funcao.component';

describe('PerfilFuncaoComponent', () => {
  let component: PerfilFuncaoComponent;
  let fixture: ComponentFixture<PerfilFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
