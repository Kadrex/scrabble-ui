import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddValidWordService {

  private baseUrl = 'http://localhost:8082/' //this.c.conf.serviceUrl + 'valid';

  constructor(
    private http: HttpClient,
  ) {
  }

  save(word: string): Observable<string> {
    const url = this.baseUrl + 'saveValidWord';
    const params = new HttpParams().set('word', word);
    return this.http.post<string>(url, {}, {params})
  }

}
