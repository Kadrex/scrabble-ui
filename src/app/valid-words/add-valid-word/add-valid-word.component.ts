import { Component, OnInit } from '@angular/core';
import {AddValidWordService} from "./add-valid-word.service";
import {ValidWordsManagementService} from "../service/valid-words-management.service";

@Component({
  selector: 'app-add-valid-word',
  templateUrl: './add-valid-word.component.html',
  styleUrls: ['./add-valid-word.component.css']
})
export class AddValidWordComponent implements OnInit {

  word: string = "";

  showWords: boolean = false;

  constructor(
    private service: AddValidWordService,
    private managementService: ValidWordsManagementService
  ) { }

  ngOnInit(): void {
  }

  addWord() {
    this.service.save(this.word).subscribe((_) => {
      this.managementService.setValidWordsUpdated(true);
    }, error => {
      console.log(error);
    })
    this.word = "";
  }

}
