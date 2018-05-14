import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoIndexComponent } from './pagamento-index.component';

describe('PagamentoIndexComponent', () => {
  let component: PagamentoIndexComponent;
  let fixture: ComponentFixture<PagamentoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
