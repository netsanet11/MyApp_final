import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
