import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ExampleComponent } from './layout/example/example.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Sample',component:ExampleComponent},
  {path:'NotFound',component:NotfoundComponent},
  {path:'**',redirectTo:'NotFound'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
