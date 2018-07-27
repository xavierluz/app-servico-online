import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgFinalizarPedidoComponent } from './msg-finalizar-pedido.component';

describe('MsgFinalizarPedidoComponent', () => {
  let component: MsgFinalizarPedidoComponent;
  let fixture: ComponentFixture<MsgFinalizarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgFinalizarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgFinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
