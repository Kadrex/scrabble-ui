import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddValidWordComponent } from './valid-words/add-valid-word/add-valid-word.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { EnterWordComponent } from './enter-word/enter-word.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ListValidWordsComponent } from './valid-words/list-valid-words/list-valid-words.component';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { PointsGuideComponent } from './points-guide/points-guide.component';

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
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
