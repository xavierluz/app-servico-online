import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFuncaoCreateComponent } from './perfil-funcao-create.component';

describe('PerfilFuncaoCreateComponent', () => {
  let component: PerfilFuncaoCreateComponent;
  let fixture: ComponentFixture<PerfilFuncaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFuncaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFuncaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
