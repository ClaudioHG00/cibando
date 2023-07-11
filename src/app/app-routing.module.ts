import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { CombineComponent } from './components/combine/combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard } from './logged-in.guard';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
//{ path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', loadChildren: () => import('./components/recipes/recipes.module').then(modulo => modulo.RecipesModule)},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profilo', component: ProfileComponent, canActivate: [loggedInGuard]},
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
