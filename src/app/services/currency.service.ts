import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getConversion(base, symbols): Observable<any> {
    const params = { from: base, to: symbols };
    return this.http.get(environment.HOST, { params });
  }
}
