import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemItensComponent } from './ordem-itens.component';

describe('OrdemItensComponent', () => {
  let component: OrdemItensComponent;
  let fixture: ComponentFixture<OrdemItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
