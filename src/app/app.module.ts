import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as appState from './store/app.reducer';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { WINDOW_PROVIDERS } from './service/window.service';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appState.appReducer),
    SharedModule
  ],
  providers: [ WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
