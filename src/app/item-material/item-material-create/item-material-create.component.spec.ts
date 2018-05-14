import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialCreateComponent } from './item-material-create.component';

describe('ItemMaterialCreateComponent', () => {
  let component: ItemMaterialCreateComponent;
  let fixture: ComponentFixture<ItemMaterialCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaterialCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaterialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
