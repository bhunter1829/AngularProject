import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuantityComponent } from './update-quantity.component';

describe('UpdateQuantityComponent', () => {
  let component: UpdateQuantityComponent;
  let fixture: ComponentFixture<UpdateQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
