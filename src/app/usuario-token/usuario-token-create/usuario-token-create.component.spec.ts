import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTokenCreateComponent } from './usuario-token-create.component';

describe('UsuarioTokenCreateComponent', () => {
  let component: UsuarioTokenCreateComponent;
  let fixture: ComponentFixture<UsuarioTokenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTokenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTokenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
