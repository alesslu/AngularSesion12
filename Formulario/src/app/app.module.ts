import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { TransformdatePipe } from './pipes/transformdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactReactiveComponent,
    PipesComponent,
    TransformdatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TransformdatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
