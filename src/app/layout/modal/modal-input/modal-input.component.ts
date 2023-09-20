import { Component,ViewChild, OnInit, Injector,Output,EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { baseComponent } from 'src/utils/base-component';
 

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {
 
  constructor(
    
    ){
  }
  
  ngOnInit(): void {
    
  }
  close(){
   
  }
  show(){
    console.log("modal show");
    //this.Mymodal.nativeElement.style.display='block';
  }
 
}
