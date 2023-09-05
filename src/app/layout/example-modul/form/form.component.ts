import { Component,OnInit, Injector } from '@angular/core';
import { baseComponent } from 'src/utils/base-component';
import {MenuItem} from 'primeng/api';
import Swal from 'sweetalert2'; 
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
   
})
export class FormComponent extends baseComponent implements OnInit{
  
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder
    ) {
      super(injector);
    }
  items!: MenuItem[];

  home!: MenuItem;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  EmailRegExp = "^([A-Za-z0-9_\\-\\.])+\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$";
  ngOnInit() {
    
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  onEmail(event: any) {
    var data = event.target.value;
    if (data != undefined || data!='') {
        let match = data.match(this.EmailRegExp);
        if (match == null) {
          this.showAlert("Incorrect Email Format",true);
        }
    }
}
  showAlert(message: string, error: boolean){
    Swal.fire({
      title: error ? 'Error!': '',
      text: message,
      icon: error ? 'error':'success',
      confirmButtonText: 'OK'
    })
  }
  alert(form: boolean){
    if(form){
    this.showAlert("Save Success",false);
    }
    else{
      this.showAlert("Upload Success",false);
    }
  }

}
