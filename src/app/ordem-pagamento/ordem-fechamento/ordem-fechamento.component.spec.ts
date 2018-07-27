import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemFechamentoComponent } from './ordem-fechamento.component';

describe('OrdemFechamentoComponent', () => {
  let component: OrdemFechamentoComponent;
  let fixture: ComponentFixture<OrdemFechamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemFechamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
