import { Component, OnInit } from '@angular/core';
import {AddValidWordService} from "./add-valid-word.service";

@Component({
  selector: 'app-add-valid-word',
  templateUrl: './add-valid-word.component.html',
  styleUrls: ['./add-valid-word.component.css']
})
export class AddValidWordComponent implements OnInit {

  word: string = "";

  constructor(
    private service: AddValidWordService
  ) { }

  ngOnInit(): void {
  }

  addWord() {
    this.service.save(this.word).subscribe(result => console.log(result))
    this.word = "";
  }

}
