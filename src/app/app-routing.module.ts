import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ExampleComponent } from './layout/example/example.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { FormComponent } from './layout/example-modul/form/form.component';
import { AdminComponent } from './layout/example-modul/admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Sample',component:ExampleComponent},
  {path:'NotFound',component:NotfoundComponent},
  {path:'Form',component:FormComponent},
  {path:'AdminDashboard',component:AdminComponent},
  {path:'**',redirectTo:'NotFound'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
