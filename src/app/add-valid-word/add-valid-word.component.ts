import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-valid-word',
  templateUrl: './add-valid-word.component.html',
  styleUrls: ['./add-valid-word.component.css']
})
export class AddValidWordComponent implements OnInit {

  word: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addWord() {
    // TODO
    this.word = "";
  }

}
