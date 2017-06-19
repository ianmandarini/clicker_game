import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionPanelComponent } from './companion-panel.component';

describe('CompanionPanelComponent', () => {
  let component: CompanionPanelComponent;
  let fixture: ComponentFixture<CompanionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
