import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CombineComponent } from './components/combine/combine.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
//{ path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', loadChildren: () => import('./components/recipes/recipes.module')
  .then(modulo => modulo.RecipesModule)},
  { path: 'user', loadChildren: () => import('./components/user/user.module')
  .then(modulo => modulo.UserModule)},
  { path: 'contatti', component: ContactsComponent },
  { path: 'combine', component: CombineComponent},
  { path: 'error404', component: ErrorComponent},
  { path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
