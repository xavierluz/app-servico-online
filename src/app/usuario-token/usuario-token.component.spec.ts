import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTokenComponent } from './usuario-token.component';

describe('UsuarioTokenComponent', () => {
  let component: UsuarioTokenComponent;
  let fixture: ComponentFixture<UsuarioTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
