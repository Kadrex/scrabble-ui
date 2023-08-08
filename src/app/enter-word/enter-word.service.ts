import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnterWordService {

  private baseUrl = 'http://localhost:8082/' //this.c.conf.serviceUrl + 'valid';

  constructor(
    private http: HttpClient
  ) {
  }

  submit(word: string): Observable<string> {
    const url = this.baseUrl + 'submit';
    const params = new HttpParams().set('word', word);
    return this.http.get<string>(url, {params})
  }
}
