import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatCardModule, MatInputModule, MatButtonModule, MatTableModule
  ],
  exports: [
    MatCardModule, MatInputModule, MatButtonModule, MatTableModule
  ],
})
export class MaterialModule { }
