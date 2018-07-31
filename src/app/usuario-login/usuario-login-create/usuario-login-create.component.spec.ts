import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLoginCreateComponent } from './usuario-login-create.component';

describe('UsuarioLoginCreateComponent', () => {
  let component: UsuarioLoginCreateComponent;
  let fixture: ComponentFixture<UsuarioLoginCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioLoginCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioLoginCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
