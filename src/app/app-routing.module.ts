import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users',component: UsersComponent},
  {path:'users/create',component: CreateUserComponent},
  {path:'users/update/:id',component: UpdateUserComponent},
  {path:'users/delete/:id',component:DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
