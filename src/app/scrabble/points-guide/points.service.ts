import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Points} from "../../models/points";

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  private baseUrl = 'http://localhost:8082';

  constructor(
    private http: HttpClient
  ) {
  }

  getPoints(): Observable<Points[]> {
    const url = this.baseUrl + '/pointsGuide';
    return this.http.get<Points[]>(url);
  }

}
