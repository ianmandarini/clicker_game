import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerPanelComponent } from './clicker-panel.component';

describe('ClickerPanelComponent', () => {
  let component: ClickerPanelComponent;
  let fixture: ComponentFixture<ClickerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
