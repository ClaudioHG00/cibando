import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { loggedInGuard } from '../../logged-in.guard';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'registrazione', component: RegistrationComponent},
    { path: 'profilo', component: ProfileComponent, canActivate: [loggedInGuard]},
  ]},
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
