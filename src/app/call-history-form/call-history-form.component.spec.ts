import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHistoryFormComponent } from './call-history-form.component';

describe('CallHistoryFormComponent', () => {
  let component: CallHistoryFormComponent;
  let fixture: ComponentFixture<CallHistoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallHistoryFormComponent]
    });
    fixture = TestBed.createComponent(CallHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
