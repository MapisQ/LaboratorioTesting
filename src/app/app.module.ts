import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GreetingsComponent } from './Component/greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
