import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoCreateComponent } from './tipo-servico-create.component';

describe('TipoServicoCreateComponent', () => {
  let component: TipoServicoCreateComponent;
  let fixture: ComponentFixture<TipoServicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
