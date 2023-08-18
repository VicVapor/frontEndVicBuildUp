import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    NavbarComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
