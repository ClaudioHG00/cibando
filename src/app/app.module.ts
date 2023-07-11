import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { DividerModule} from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RecipesModule } from './components/recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';

// Moduli importati per la pagina di contacts
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { CombineComponent } from './components/combine/combine.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { OnPlaceHolderDirective } from './directives/on-place-holder.directive';
import { LoginComponent } from './components/user/login/login.component';
import { HighlightBgDirective } from './directives/highlight-bg.directive';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    RegistrationComponent,
    CombineComponent,
    ChangeColorDirective,
    OnPlaceHolderDirective,
    LoginComponent,
    HighlightBgDirective,
    ProfileComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    CKEditorModule,
    RecipesModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    CascadeSelectModule,
    ConfirmDialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
