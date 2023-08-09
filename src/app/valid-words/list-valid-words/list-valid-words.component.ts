import { Component, OnInit } from '@angular/core';
import {ListValidWordsService} from "./list-valid-words.service";
import {ValidWord} from "../../models/valid-word";
import {MatTableDataSource} from "@angular/material/table";
import {ValidWordsManagementService} from "../service/valid-words-management.service";

@Component({
  selector: 'app-list-valid-words',
  templateUrl: './list-valid-words.component.html',
  styleUrls: ['./list-valid-words.component.css']
})
export class ListValidWordsComponent implements OnInit {

  validWords: string[] = [];
  datasource: MatTableDataSource<ValidWord> = new MatTableDataSource<ValidWord>();

  constructor(
    private service: ListValidWordsService,
    private managementService: ValidWordsManagementService
  ) { }

  ngOnInit(): void {
    this.managementService.validWordsUpdated.subscribe((_) => {
      this.getValidWords();
    });
  }

  private getValidWords(): void {
    this.service.getAll().subscribe((words: ValidWord[]) => {
      this.datasource.data = words;
    });
  }

}
