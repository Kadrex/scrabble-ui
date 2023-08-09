import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ValidWord} from "../../models/valid-word";

@Injectable({
  providedIn: 'root'
})
export class AddValidWordService {

  private baseUrl = 'http://localhost:8082/' //this.c.conf.serviceUrl + 'valid';

  constructor(
    private http: HttpClient,
  ) {
  }

  save(word: string): Observable<ValidWord> {
    const url = this.baseUrl + 'saveValidWord';
    const params = new HttpParams().set('word', word).set('responseType', 'application/json');
    return this.http.post<ValidWord>(url, {}, {params})
  }

}
