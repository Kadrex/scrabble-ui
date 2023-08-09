import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ValidWord} from "../../models/valid-word";
import {ConfigurationService} from "../../configuration/configuration.service";
import {ResultResponse} from "../../models/result-response";

@Injectable({
  providedIn: 'root'
})
export class ValidWordsService {

  private baseUrl: string = this.conf.BASE_URL + '/validWords';

  constructor(
    private http: HttpClient,
    private conf: ConfigurationService
  ) {
  }

  getAll(): Observable<ValidWord[]> {
    const url = this.baseUrl + '/list';
    return this.http.get<ValidWord[]>(url);
  }

  save(word: string): Observable<ResultResponse> {
    const url = this.baseUrl + '/save';
    const params = new HttpParams().set('word', word);
    return this.http.post<ResultResponse>(url, {}, {params})
  }

}
