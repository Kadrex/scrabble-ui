import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent implements OnInit {

  word: string = "";

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
