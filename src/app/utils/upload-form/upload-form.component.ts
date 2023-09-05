import { Component,OnInit,ViewChild,Input,Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
 

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  providers: [MessageService],
})
export class UploadFormComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer) { }
    
 UrlUpload:string ="";
 urlImage!: SafeResourceUrl;
 uploadedGFG: any[] = [];
 multiple:boolean = false;
 auto = false;
 maxFileSize = 2500000;
 showChoosenUpload = true;
 showUploadButton = false;
 showCancelButton: boolean = false;
  ngOnInit(): void {
    
  }
 
 onSelected(event: any){
  var tmp = String(event.currentFiles[0].objectURL);
  var tmp2 = tmp.replace("SafeValue must use [property]=binding: ",'');
  tmp2 = tmp2.replace("(see https://g.co/ng/security#xss)","");
  tmp2 = tmp2.replace(" ",'');
  this.urlImage=this.sanitizer.bypassSecurityTrustResourceUrl(tmp2);
 
  
 }
 
}
