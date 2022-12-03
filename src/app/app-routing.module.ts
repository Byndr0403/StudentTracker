import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '' , redirectTo: '/gallery', pathMatch: 'full'},
  { path:'login' , component : LoginComponent },
  { path:'register', component : RegisterComponent },
  { path:'foolter', component : FooterComponent },
  { path:'gallery', component : GallaryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


