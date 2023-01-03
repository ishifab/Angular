import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"form",component: FormulaireComponent},
  {path:"404",component: NotFoundComponent},

// Tjs a placer en dernier sinon les routes ne seront pas trouvées
  {path:"**",redirectTo:'/404'},// C'est une instruction qu'on doit mettre à la fin.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
