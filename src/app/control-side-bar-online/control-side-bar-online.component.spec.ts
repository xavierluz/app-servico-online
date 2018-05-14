import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSideBarOnlineComponent } from './control-side-bar-online.component';

describe('ControlSideBarOnlineComponent', () => {
  let component: ControlSideBarOnlineComponent;
  let fixture: ComponentFixture<ControlSideBarOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSideBarOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSideBarOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
