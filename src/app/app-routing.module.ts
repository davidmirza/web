import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ExampleComponent } from './layout/example/example.component';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
 // {path:'**',component:HomeComponent},//for error not found
  {path:'Gallery',component:GalleryComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Sample',component:ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
