import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDetalheComponent } from './empresa-detalhe.component';

describe('EmpresaDetalheComponent', () => {
  let component: EmpresaDetalheComponent;
  let fixture: ComponentFixture<EmpresaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
