import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './views/home/home.component';
//import { LiveListComponent } from './views/home/live-list/live-list.component'

const routes: Routes = [
  // {
  //   path:'',
  //   component: HomeComponent
  // },
  { path: 'lives', loadChildren: () => import('./views/lives/lives.module').then(m => m.LivesModule) },
  // { path: 'C:/Program Files/Git/users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) }
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) }
  , {
    path:'',
    redirectTo: '/lives',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
