import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultResponse } from '../../models/result-response';
import { ConfigurationService } from '../../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EnterWordService {

  private baseUrl = this.conf.BASE_URL + '/scrabble';

  constructor(
    private http: HttpClient,
    private conf: ConfigurationService
  ) {
  }

  submit(word: string): Observable<ResultResponse> {
    const url = this.baseUrl + '/submit';
    const params = new HttpParams().set('word', word);
    return this.http.get<ResultResponse>(url, {params})
  }
}
