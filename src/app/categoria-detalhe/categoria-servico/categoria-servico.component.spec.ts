import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaServicoComponent } from './categoria-servico.component';

describe('CategoriaServicoComponent', () => {
  let component: CategoriaServicoComponent;
  let fixture: ComponentFixture<CategoriaServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
