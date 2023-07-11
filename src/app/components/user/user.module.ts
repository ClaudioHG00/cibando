import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { DividerModule} from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserRoutingModule } from "./user-routing.module";

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from "src/app/services/user.service";

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    UserRoutingModule,
  ],
  providers: [UserService],
})
export class UserModule { }

