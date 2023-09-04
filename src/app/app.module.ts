import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FooterComponent } from './layout/footer/footer.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactComponent } from './layout/contact/contact.component';
import { ExampleComponent } from './layout/example/example.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { AdminComponent } from './layout/example-modul/admin/admin.component';
import { FormComponent } from './layout/example-modul/form/form.component';
import { UploadFormComponent } from './utils/upload-form/upload-form.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent,
    ExampleComponent,
    NotfoundComponent,
    AdminComponent,
    FormComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    MatGridListModule,FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
