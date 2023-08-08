import { Component, OnInit } from '@angular/core';
import {EnterWordService} from "./enter-word.service";

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent implements OnInit {

  word: string = "";

  constructor(
    private service: EnterWordService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.submit(this.word).subscribe(r => console.log(r));
    this.word = "";
  }

}
