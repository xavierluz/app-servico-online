import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoIndexComponent } from './tipo-servico-index.component';

describe('TipoServicoIndexComponent', () => {
  let component: TipoServicoIndexComponent;
  let fixture: ComponentFixture<TipoServicoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
