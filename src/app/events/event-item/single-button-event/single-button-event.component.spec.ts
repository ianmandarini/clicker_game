import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButtonEventComponent } from './single-button-event.component';

describe('SingleButtonEventComponent', () => {
  let component: SingleButtonEventComponent;
  let fixture: ComponentFixture<SingleButtonEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleButtonEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleButtonEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
