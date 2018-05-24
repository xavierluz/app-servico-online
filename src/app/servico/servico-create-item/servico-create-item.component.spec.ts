import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCreateItemComponent } from './servico-create-item.component';

describe('ServicoCreateItemComponent', () => {
  let component: ServicoCreateItemComponent;
  let fixture: ComponentFixture<ServicoCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
