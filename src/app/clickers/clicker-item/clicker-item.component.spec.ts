import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerItemComponent } from './clicker-item.component';

describe('ClickerItemComponent', () => {
  let component: ClickerItemComponent;
  let fixture: ComponentFixture<ClickerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
