import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users.component';

const routes: Routes = [{
  path: 'github-users',
  component: UsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
