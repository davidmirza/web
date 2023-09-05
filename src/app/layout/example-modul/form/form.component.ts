import { Component,OnInit } from '@angular/core';
 
import {MenuItem} from 'primeng/api';
 
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
   
})
export class FormComponent implements OnInit{
  constructor(private _formBuilder: FormBuilder) {}
  items!: MenuItem[];

  home!: MenuItem;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ngOnInit() {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
  ];
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
