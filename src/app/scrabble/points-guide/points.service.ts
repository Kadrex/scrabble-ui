import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Points} from "../../models/points";
import {ConfigurationService} from "../../configuration/configuration.service";

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  private baseUrl = this.conf.BASE_URL + '/points';

  constructor(
    private http: HttpClient,
    private conf: ConfigurationService
  ) {
  }

  getPoints(): Observable<Points[]> {
    const url = this.baseUrl + '/guide';
    return this.http.get<Points[]>(url);
  }

}
