import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteComponent} from './compte/compte.component';
import {IdentificationComponent} from './identification/identification.component';
import {PageSuccessComponent} from './page-success/page-success.component'

const routes: Routes = [
  {path: '', redirectTo: '/identification', pathMatch: 'full'},
  {path: 'identification', component: IdentificationComponent},
  {path: 'compte', component: CompteComponent},
  {path: 'pageSuccess', component: PageSuccessComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
