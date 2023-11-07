import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{
  transactions: any[] = []; 

  constructor(private transactionService: TransactionService) {}

  /**I use ngOnInit to load the data from teh json files at the same time the page is loaded, and use the service for it*/
  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data; 
      console.log(this.transactions);
    });
  }
}
