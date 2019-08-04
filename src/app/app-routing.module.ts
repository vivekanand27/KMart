import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './user/create-user.component';
import { ListUserComponent } from './user/list-user.component';


const routes: Routes = [
  { path: 'user', component: CreateUserComponent },
  { path: 'userlist', component: ListUserComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
