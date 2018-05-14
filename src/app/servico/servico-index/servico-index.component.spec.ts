import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoIndexComponent } from './servico-index.component';

describe('ServicoIndexComponent', () => {
  let component: ServicoIndexComponent;
  let fixture: ComponentFixture<ServicoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
