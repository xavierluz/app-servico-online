import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoostrapComponent } from './modal-boostrap.component';

describe('ModalBoostrapComponent', () => {
  let component: ModalBoostrapComponent;
  let fixture: ComponentFixture<ModalBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
