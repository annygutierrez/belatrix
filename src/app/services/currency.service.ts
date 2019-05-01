import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST, ACCESS_KEY } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getConversion(base, symbols): Observable<any> {
    return this.http.get(`${HOST}?from=${base}&to=${symbols}`);
  }
}
