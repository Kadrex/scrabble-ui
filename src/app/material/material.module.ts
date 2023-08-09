import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
  ],
})
export class MaterialModule { }
