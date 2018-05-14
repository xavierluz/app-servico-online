import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialIndexComponent } from './item-material-index.component';

describe('ItemMaterialIndexComponent', () => {
  let component: ItemMaterialIndexComponent;
  let fixture: ComponentFixture<ItemMaterialIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaterialIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaterialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
