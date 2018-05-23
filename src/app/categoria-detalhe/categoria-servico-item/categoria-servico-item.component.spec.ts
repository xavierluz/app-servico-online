import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaServicoItemComponent } from './categoria-servico-item.component';

describe('CategoriaServicoItemComponent', () => {
  let component: CategoriaServicoItemComponent;
  let fixture: ComponentFixture<CategoriaServicoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaServicoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaServicoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
