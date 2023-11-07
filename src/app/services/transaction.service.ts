import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*I created this service to take the all the information from the json files */
export class TransactionService {

  private jsonUrl = 'assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getTransactionDetail(id: string | null) {
    return this.http.get(`assets/data/${id}.json`);
  }
}
