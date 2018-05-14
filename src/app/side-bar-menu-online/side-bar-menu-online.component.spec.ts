import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenuOnlineComponent } from './side-bar-menu-online.component';

describe('SideBarMenuOnlineComponent', () => {
  let component: SideBarMenuOnlineComponent;
  let fixture: ComponentFixture<SideBarMenuOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarMenuOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMenuOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
