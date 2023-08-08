import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  imports: [
    MatCardModule, MatInputModule, MatButtonModule
  ],
  exports: [
    MatCardModule, MatInputModule, MatButtonModule
  ],
})
export class MaterialModule { }
