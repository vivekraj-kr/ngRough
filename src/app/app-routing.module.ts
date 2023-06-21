import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lifecycle-hooks',
    pathMatch:'full'
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
  {
    path: 'github-users',
    component: UsersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
