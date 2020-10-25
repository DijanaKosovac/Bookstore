import { BookStoreComponent } from './bookstore/bookstore.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'bookstore', component: BookStoreComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
