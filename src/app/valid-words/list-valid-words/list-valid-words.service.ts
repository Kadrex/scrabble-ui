import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ValidWord} from "../../models/valid-word";

@Injectable({
  providedIn: 'root'
})
export class ListValidWordsService {

  private baseUrl: string = "http://localhost:8082";

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<ValidWord[]> {
    const url = this.baseUrl + '/listValidWords';
    return this.http.get<ValidWord[]>(url);
  }

}
