import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValidWordsManagementService {

  private readonly _validWordsUpdated = new BehaviorSubject<boolean>(false);
  readonly validWordsUpdated = this._validWordsUpdated.asObservable();

  setValidWordsUpdated(updated: boolean): void {
    this._validWordsUpdated.next(updated);
  }

}
