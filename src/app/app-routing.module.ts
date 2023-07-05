import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
//{ path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  // { path: 'home/dettaglio/:title/:_id', redirectTo: 'ricette/dettaglio/:title/:_id'},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent},
    { path: '', component: RecipesListComponent, pathMatch:'full'}
  ]},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'nuova-ricetta', component: NewRecipeComponent },
  { path: 'error404', component: ErrorComponent},
  { path: '**', redirectTo: 'error404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
