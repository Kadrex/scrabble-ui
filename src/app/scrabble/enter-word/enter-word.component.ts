import { Component, OnInit } from '@angular/core';
import { EnterWordService } from './enter-word.service';
import { ResultResponse } from '../../models/result-response';

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent implements OnInit {

  word: string = '';
  result: ResultResponse | undefined;
  totalPoints: number = 0;

  history: ResultResponse[] = [];

  constructor(
    private service: EnterWordService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.submit(this.word).subscribe((response: ResultResponse) => {
      if (this.result) {
        this.history.push(this.result);
      }
      this.result = response;
      this.totalPoints += response.points ?? 0;
    }, error => {
      console.error(error);
    });
    this.word = '';
  }

}
