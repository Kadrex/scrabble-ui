import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddValidWordComponent } from './add-valid-word/add-valid-word.component';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    AddValidWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
