import { Component, OnInit } from '@angular/core';
import {AddValidWordService} from "./add-valid-word.service";
import {ValidWordsManagementService} from "../service/valid-words-management.service";
import {ResultResponse} from "../../models/result-response";

@Component({
  selector: 'app-add-valid-word',
  templateUrl: './add-valid-word.component.html',
  styleUrls: ['./add-valid-word.component.css']
})
export class AddValidWordComponent implements OnInit {

  word: string = "";

  showWords: boolean = false;
  result: ResultResponse | undefined;

  constructor(
    private service: AddValidWordService,
    private managementService: ValidWordsManagementService
  ) { }

  ngOnInit(): void {
  }

  addWord() {
    this.service.save(this.word).subscribe((response: ResultResponse) => {
      if (response.accepted) {
        this.managementService.setValidWordsUpdated(true);
      }
      this.result = response;
    }, error => {
      console.error(error);
    })
    this.word = "";
  }

}
