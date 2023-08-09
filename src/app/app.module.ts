import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddValidWordComponent } from './valid-words/add-valid-word/add-valid-word.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { EnterWordComponent } from './scrabble/enter-word/enter-word.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ListValidWordsComponent } from './valid-words/list-valid-words/list-valid-words.component';
import { PointsGuideComponent } from './scrabble/points-guide/points-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    AddValidWordComponent,
    EnterWordComponent,
    ListValidWordsComponent,
    PointsGuideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
