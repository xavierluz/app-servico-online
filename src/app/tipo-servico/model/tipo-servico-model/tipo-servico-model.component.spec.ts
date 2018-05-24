import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoModelComponent } from './tipo-servico-model.component';

describe('TipoServicoModelComponent', () => {
  let component: TipoServicoModelComponent;
  let fixture: ComponentFixture<TipoServicoModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicoModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
