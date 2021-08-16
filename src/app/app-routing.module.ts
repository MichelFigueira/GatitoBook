import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule) },
  { path: 'animals', loadChildren:()=> import('./animals/animals.module').then((m)=> m.AnimalsModule), canLoad:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
