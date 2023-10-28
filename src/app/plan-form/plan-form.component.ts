import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanService } from '../plan.service';
import { Plan, PlanType } from '../plan';
@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {
  planForm: FormGroup;
  planTypeEnum = PlanType;

  constructor(private fb: FormBuilder, private planService: PlanService) {}

  ngOnInit() {
    this.planForm = this.fb.group({
      name: ['', Validators.required],
      dataLimit: [null, Validators.required],
      totalData: [null, Validators.required],
      voiceLimit: [null, Validators.required],
      smsLimit: [null, Validators.required],
      price: [null, Validators.required],
      validity: [null, Validators.required],
      planType: [null, Validators.required],
    });
  }

  submitForm() {
    if (this.planForm.valid) {
      const plan: Plan = this.planForm.value;
      this.planService.addPlan(plan).subscribe((response) => {
        console.log('Plan added:', response);
        this.planForm.reset();
      });
    }
  }
}

