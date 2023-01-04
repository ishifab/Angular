import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"form",component: FormulaireComponent},
  {path:"404",component: NotFoundComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:userId",component: UserComponent},


// Tjs a placer en dernier sinon les routes ne seront pas atteintes
  {path:"**",redirectTo:'/404'},// C'est une instruction qu'on doit mettre à la fin.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
