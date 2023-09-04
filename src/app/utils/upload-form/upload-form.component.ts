import { Component,OnInit,ViewChild,Input,TemplateRef } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit{
 UrlUpload:string ="";
 accept = 'image/*, .csv, .xls, .xlsx, .doc, .docx, .pdf, .zip';
 multiple:boolean = false;
 auto = false;
 maxFileSize = 2500000;
 showChoosenUpload = true;
 @Input() preview = true;
 @Input() showList = true;
 @Input() showUploadButton = false;
 @Input() showUploaded = true;
 @Input() uploadedFiles: any[] = [];
 showCancelButton: boolean = false;
  ngOnInit(): void {
    
  }
}
