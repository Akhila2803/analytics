import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallHistory } from '../subscriber';
import { CallHistoryService } from '../callhistory.service';


@Component({
  selector: 'app-call-history-form',
  templateUrl: './call-history-form.component.html',
})
export class CallHistoryFormComponent {
  callHistoryForm: FormGroup;

  constructor(private fb: FormBuilder, private callHistoryServcie:CallHistoryService) {
    this.callHistoryForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      date: [new Date(), Validators.required],
    });
  }

  onSubmit() {
    if (this.callHistoryForm.valid) {
      const callHistory: CallHistory = this.callHistoryForm.value;
      this.callHistoryServcie.createCallHistory(callHistory).subscribe((response) => {
        console.log('call history added', response);
        this.callHistoryForm.reset();
      });
    }
  }
}
