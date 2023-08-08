import { Component, OnInit } from '@angular/core';
import {EnterWordService} from "./enter-word.service";
import {ResultResponse} from "../models/result-response";

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent implements OnInit {

  word: string = "";
  result: ResultResponse | undefined;

  constructor(
    private service: EnterWordService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.submit(this.word).subscribe((response: ResultResponse) => {
      console.log(response);
      this.result = response;
    });
    this.word = "";
  }

}
